import { useContext, useState, useMemo } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import TodoCard from './TodoCard/TodoCard';
import { TodoContext, Todo } from '../../store/todo/todo-context';
import { isTablet } from '../../utils/deviceInfo';
import { SortObjByDate } from '../../utils/dates';
import DayMenu from './Menu/DayMenu';
import LabelMenu from './Menu/LabelMenu';

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  const [selectedDay, setSelectedDay] = useState(0);
  const filterdTodosByDate = useMemo(
    () => SortObjByDate([...todoCtx.todos]),
    [todoCtx.todos]
  );

  const GetTodosByDate = (): Todo[] => {
    if (selectedDay === 0) {
      return filterdTodosByDate;
    }
    return [
      ...todoCtx.todos.filter(
        (todo) =>
          new Date(todo.date).getUTCDate().toString() === selectedDay.toString()
      ),
    ];
  };

  return (
    <View style={styles.container}>
      <View style={styles.Menu}>
        <DayMenu selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        <LabelMenu />
      </View>
      {todoCtx.todos.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={GetTodosByDate()}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoCard {...item} />}
          numColumns={isTablet ? 2 : 1}
          contentContainerStyle={styles.FlatListContainer}
        />
      )}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  Menu: {
    flexDirection: 'row',
    marginHorizontal: isTablet ? 10 : 0,
    zIndex: 1,
  },
  FlatListContainer: {
    marginHorizontal: 10,
    zIndex: 1,
  },
});
