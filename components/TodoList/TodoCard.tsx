import { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { RootStackNavigationProp } from '../navigation/NavigationTypes';
import { useNavigation } from '@react-navigation/native';
import { TodoContext } from '../../store/todo/todo-context';
import { Todo } from '../../store/todo/todo-context';
import RemoveCard from './RemoveCard';
import DateElement from './DateElement';
import TitleElement from './TitleElement';
import ContentElement from './ContentElement';
import color from '../../utils/colors';
import { BasicShadow } from '../../utils/shadow';

const TodoCard = (item: Todo) => {
  const { title, id, content, date } = item;
  const todoCtx = useContext(TodoContext);
  const navigation = useNavigation<RootStackNavigationProp>();
  const onRemove = () => {
    todoCtx.deleteTodo(id);
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('AddScreen', {
          todo: item,
          id: id,
        });
      }}
      style={({ pressed }) =>
        pressed ? [styles.container, { opacity: 0.5 }] : styles.container
      }
    >
      <View style={styles.titleContainer}>
        <View style={styles.CardHeader}>
          <TitleElement title={title} />
          <DateElement date={date} />
        </View>
        <ContentElement content={content} />
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
    width: 300,
    borderWidth: 0.1,
    borderColor: color.darkBlue,
    margin: 10,
    padding: 10,
    backgroundColor: color.grey,
    ...BasicShadow,
  },
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
  },
  removeContainer: {
    paddingRight: 20,
  },
});
