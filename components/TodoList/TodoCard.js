import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TodoContext } from '../../store/todo/todo-context';
import RemoveCard from './RemoveCard';

const TodoCard = ({ title, id }) => {
  const todoCtx = useContext(TodoContext);
  console.log(todoCtx);
  onRemove = () => {
    todoCtx.deleteTodo(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>
      <View style={styles.removeContainer}>
        <RemoveCard onRemove={onRemove} />
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    elevation: 5,
    marginBottom: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
  },
  removeContainer: {
    paddingRight: 20,
  },
});
