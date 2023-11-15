import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface TitleTextProps {
	text: string;
	extraStyles?: ViewStyle ;
	extraContainerStyle?: ViewStyle;
}
const TitleText = ({ text, extraStyles, extraContainerStyle }: TitleTextProps) => {
  return (
    <View style={[styles.container, extraContainerStyle]}>
      <Text style={[styles.textStyle, extraStyles]}>{text}</Text>
    </View>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
	opacity: 1,
    color: 'white',
  },
});
