import { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TodoContext } from '../../store/todo/todo-context';
import RemoveCard from './RemoveCard';

const TodoCard = ({ title, id }) => {
  const todoCtx = useContext(TodoContext);
  const navigation = useNavigation();
  onRemove = () => {
    todoCtx.deleteTodo(id);
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('AddScreen', {
          title: title,
          id: id,
        });
      }}
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>
      <View style={styles.removeContainer}>
        <RemoveCard onRemove={onRemove} />
      </View>
    </Pressable>
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
