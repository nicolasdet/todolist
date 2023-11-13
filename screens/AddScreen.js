import { View, Text, StyleSheet, Pressable } from 'react-native';
import AddScreenHeader from '../components/AddHeader/AddScreenHeader';

export const AddScreen = () => {
  return (
    <View style={styles.container}>
      <AddScreenHeader />
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
