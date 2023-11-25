import { View, StyleSheet, Text, Pressable } from 'react-native';

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
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
