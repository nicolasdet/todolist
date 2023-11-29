import { View, Text, StyleSheet, Pressable } from 'react-native';
import { BasicShadow } from '../../../utils/shadow';
export const LabelMenu = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>filtrer</Text>
    </Pressable>
  );
};

export default LabelMenu;

const styles = StyleSheet.create({
  container: {
    width: '25%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    ...BasicShadow,
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
});
