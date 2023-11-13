import { View, Text, Pressable, StyleSheet } from 'react-native';
import { isTablet } from '../../utils/deviceInfo';
import { colors } from '../../utils/colors';

const AddScreenHeader = () => {
  return (
    <View style={styles.container}>
      <Text>Ajouter une tache</Text>
    </View>
  );
};

export default AddScreenHeader;

const styles = StyleSheet.create({
  container: {
    width: isTablet ? '60%' : '80%',
    backgroundColor: colors.blue,
    marginTop: 70,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
