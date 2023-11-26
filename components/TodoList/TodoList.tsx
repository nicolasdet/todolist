import { useContext } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import TodoCard from './TodoCard';
import { TodoContext } from '../../store/todo/todo-context';
import { isTablet } from '../../utils/deviceInfo';
import { SortObjByDate, daysInCurrentMonth } from '../../utils/dates';
import DayMenu from './DateMenu/DayMenu';

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  const filterdTodosByDate = SortObjByDate([...todoCtx.todos]);

  const GetTodosByDate = (date: string) => {
    return todoCtx.todos.filter((todo) => todo.date === date);
  };

  return (
    <View style={styles.container}>
      <DayMenu />
      {todoCtx.todos.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={filterdTodosByDate}
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
