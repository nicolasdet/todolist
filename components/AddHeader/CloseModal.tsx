import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CloseModal = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Ionicons name="ios-close-sharp" size={42} color="black" />
      </Pressable>
    </View>
  );
};

export default CloseModal;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
