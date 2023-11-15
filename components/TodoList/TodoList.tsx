import { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TodoCard from './TodoCard';
import { TodoContext } from '../../store/todo/todo-context';


const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={todoCtx.todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoCard title={item.title} id={item.id} />}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});
