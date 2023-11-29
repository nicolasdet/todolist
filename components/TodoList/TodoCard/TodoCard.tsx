import { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { RootStackNavigationProp } from '../../navigation/NavigationTypes';
import { useNavigation } from '@react-navigation/native';
import { TodoContext } from '../../../store/todo/todo-context';
import { Todo } from '../../../store/todo/todo-context';
import DateElement from './DateElement';
import TitleElement from './TitleElement';
import ContentElement from './ContentElement';
import color from '../../../utils/colors';
import { BasicShadow } from '../../../utils/shadow';
import { isTablet } from '../../../utils/deviceInfo';
import LabelsElements from './LabelsElements';

/*

Todo contient un tableau de labels sous format string mais ça devrait etre un tableau de type Label 
faut faire du sql à nouveau hein 
il est temps de crée le back office 

*/

const TodoCard = (item: Todo) => {
  const { title, id, content, date } = item;
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('AddScreen', {
          todo: item,
          id: id,
        });
      }}
      onLongPress={() => {
        navigation.navigate('TodoConfigScreen', {
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

        <LabelsElements labels={item.labels} />
      </View>
    </Pressable>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    width: isTablet ? 500 : 300,
    height: 150,
    borderWidth: 0.1,
    borderColor: color.darkBlue,
    margin: 10,
    padding: 10,
    backgroundColor: color.grey,
    zIndex: 1,
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
