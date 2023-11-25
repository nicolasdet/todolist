import { useContext } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import TodoCard from './TodoCard';
import { TodoContext } from '../../store/todo/todo-context';
import { isTablet } from '../../utils/deviceInfo';
import { SortObjByDate } from '../../utils/dates';
import TodoFilterElement from './TodoFilterElement';

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  const today = new Date();

  const filterdTodosByDate = SortObjByDate([...todoCtx.todos]);
  const filterTodosByTodayDate = [
    ...todoCtx.todos.filter(
      (todo) => todo.date === today.toISOString().slice(0, 10)
    ),
  ];

  const onPressFilter = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.MenuDropDown}>
        <TodoFilterElement label="Today" onPress={onPressFilter} />
        <TodoFilterElement label="All" onPress={onPressFilter} />
      </View>
      <FlatList
        data={filterdTodosByDate}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoCard {...item} />}
        numColumns={isTablet ? 2 : 1}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  MenuDropDown: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});
