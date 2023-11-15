import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface RemoveCardInterface {
	onRemove: () => void;
}
const RemoveCard = ({ onRemove }: RemoveCardInterface) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onRemove}>
        <Ionicons name="trash-bin-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default RemoveCard;

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});
