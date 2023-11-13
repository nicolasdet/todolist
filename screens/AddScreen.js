import { View, Text, StyleSheet, Pressable } from 'react-native';
import AddScreenHeader from '../components/AddHeader/AddScreenHeader';
import CloseModal from '../components/AddHeader/CloseModal.js';
import TodoForm from '../components/TodoForm/TodoForm';
export const AddScreen = () => {
  return (
    <View style={styles.container}>
      <CloseModal />
      <View style={styles.headerContainer}>
        <AddScreenHeader />
      </View>
      <View style={styles.formContainer}>
        <TodoForm />
      </View>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    flex: 3,
    alignItems: 'center',
    paddingTop: 20,
  },
});
