import { View, Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const SubmitButton = ({ onPress }) => {
  return (
    <Pressable style={StyleSheets.container} onPress={onPress}>
      <Text>valider</Text>
    </Pressable>
  );
};

export default SubmitButton;

const StyleSheets = StyleSheet.create({
  container: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    padding: 10,
    borderRadius: 4,
    marginVertical: 18,
  },
});
