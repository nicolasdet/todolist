import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AddScreenNavigationProp } from '../components/navigation/NavigationTypes';
import AddScreenHeader from '../components/AddHeader/AddScreenHeader';
import CloseModal from '../components/AddHeader/CloseModal';
import TodoForm from '../components/TodoForm/TodoForm';
export const AddScreen = ({ route }: AddScreenNavigationProp) => {
  const newsID = route.params?.id;
  const newsTitle = route.params?.title;
  const isEditing = !!newsID;
  return (
    <View style={styles.container}>
      <CloseModal />
      <View style={styles.headerContainer}>
        <AddScreenHeader isEditing={isEditing} />
      </View>
      <View style={styles.formContainer}>
        <TodoForm
          isEditing={isEditing}
          newsID={newsID}
          newsTitle={newsTitle}
          key={newsID}
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
