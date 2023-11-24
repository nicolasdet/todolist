import { View, StyleSheet } from 'react-native';
import { AddScreenNavigationProp } from '../components/navigation/NavigationTypes';
import AddScreenHeader from '../components/AddHeader/AddScreenHeader';
import CloseModal from '../components/AddHeader/CloseModal';
import TodoForm from '../components/TodoForm/TodoForm';

export const AddScreen = ({ route }: AddScreenNavigationProp) => {
  const todoID = route.params?.id;
  const Todo = route.params?.todo;
  const isEditing = !!todoID;

  return (
    <View style={styles.container}>
      <CloseModal />
      <View style={styles.headerContainer}>
        <AddScreenHeader isEditing={isEditing} />
      </View>
      <View style={styles.formContainer}>
        <TodoForm
          isEditing={isEditing}
          todoID={todoID}
          key={todoID}
          todo={Todo}
        />
      </View>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
