import { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TodoCard from './TodoCard';
import { TodoContext } from '../../store/todo/todo-context';
import { Todo } from '../../store/todo/todo-context';
import { isTablet } from '../../utils/deviceInfo';

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={todoCtx.todos}
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
});
