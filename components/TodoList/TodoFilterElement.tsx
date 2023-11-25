import { StyleSheet, Text, Pressable } from 'react-native';
import Color from '../../utils/colors';
import { BasicShadow } from '../../utils/shadow';

interface TodoFilterElementInterface {
  label: string;
  onPress: () => void;
}

const TodoFilterElement = ({ label, onPress }: TodoFilterElementInterface) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default TodoFilterElement;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: Color.material,
    padding: 10,
    borderRadius: 5,
    ...BasicShadow,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
