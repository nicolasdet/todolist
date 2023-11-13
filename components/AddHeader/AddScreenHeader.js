import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { isTablet } from '../../utils/deviceInfo';
import { colors } from '../../utils/colors';

const AddScreenHeader = () => {
  const navigation = useNavigation();
  onClose = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text>Ajouter une tache</Text>
      <Pressable onPress={onClose}>
        <Text>close</Text>
      </Pressable>
    </View>
  );
};

export default AddScreenHeader;

const styles = StyleSheet.create({
  container: {
    width: isTablet ? '50%' : '90%',
    backgroundColor: colors.blue,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
