import { useContext, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import TodoCard from './TodoCard';
import { TodoContext, Todo } from '../../store/todo/todo-context';
import { isTablet } from '../../utils/deviceInfo';
import { SortObjByDate } from '../../utils/dates';
import DayMenu from './DateMenu/DayMenu';

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  const [selectedDay, setSelectedDay] = useState(0);
  const filterdTodosByDate = SortObjByDate([...todoCtx.todos]);

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
      <DayMenu selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      {todoCtx.todos.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={GetTodosByDate()}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoCard {...item} />}
          numColumns={isTablet ? 2 : 1}
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
});
