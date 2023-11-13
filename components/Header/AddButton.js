import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddButton = () => {
  return (
    <View style={styles.containerStyle}>
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <Ionicons name="ios-add-outline" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  containerStyle: {
    marginRight: 15,
    backgroundColor: 'white',
  },
  pressed: {
    opacity: 0.4,
  },
});
