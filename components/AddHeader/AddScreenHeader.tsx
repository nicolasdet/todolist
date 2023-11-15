import { View, Text, StyleSheet } from 'react-native';
import { isTablet } from '../../utils/deviceInfo';
import { colors } from '../../utils/colors';

interface AddScreenHeaderInterface {
	isEditing: boolean;
}

const AddScreenHeader = ({ isEditing }: AddScreenHeaderInterface) => {
  return (
    <View style={styles.container}>
      <Text>{isEditing ? 'Modifier une tache' : 'Ajouter une tache'}</Text>
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
  },
});
