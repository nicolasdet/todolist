import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const TodoCard = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    elevation: 5,
    marginBottom: 10,
  },
});
