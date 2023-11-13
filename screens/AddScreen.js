import { View, Text, StyleSheet, Pressable } from 'react-native';
import AddScreenHeader from '../components/AddHeader/AddScreenHeader';
import CloseModal from '../components/AddHeader/CloseModal.js';

export const AddScreen = () => {
  return (
    <View style={styles.container}>
      <CloseModal />
      <AddScreenHeader />
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
});
