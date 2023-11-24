import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../../utils/colors';

interface SubmitButtonInterface {
  onPress: () => void;
  label?: string;
  extraStyles?: object;
}
const SubmitButton = ({
  onPress,
  label = 'valider',
  extraStyles,
}: SubmitButtonInterface) => {
  return (
    <Pressable style={[StyleSheets.container, extraStyles]} onPress={onPress}>
      <Text>{label}</Text>
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
