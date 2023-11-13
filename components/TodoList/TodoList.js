import { View, Text, StyleSheet, FlatList } from 'react-native';
import TodoCard from './TodoCard';

const todos = [
  {
    id: '1',
    title: 'Todo 1',
  },
  {
    id: '2',
    title: 'Todo 2',
  },
  {
    id: '3',
    title: 'Todo 3',
  },
];
const TodoList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoCard title={item.title} />}
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
