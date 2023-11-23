import { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { RootStackNavigationProp } from '../navigation/NavigationTypes';
import { useNavigation } from '@react-navigation/native';
import { TodoContext } from '../../store/todo/todo-context';
import RemoveCard from './RemoveCard';
import color from '../../utils/colors';

interface TodoCardInterface {
	title: string;
	id: string;
}

const TodoCard = ({ title, id }: TodoCardInterface) => {
  const todoCtx = useContext(TodoContext);
  const navigation = useNavigation<RootStackNavigationProp>();
  const onRemove = () => {
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
        {/* <RemoveCard onRemove={onRemove} /> */}
      </View>
    </Pressable>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
	width: 200,
    height: 150,
    borderWidth: 0.5,
    borderColor: color.darkBlue,
    margin: 10,
	backgroundColor: color.grey,

  },
  titleContainer: {
    flex: 1,
    marginLeft: 20,
  },
  removeContainer: {
    paddingRight: 20,
  },
});
