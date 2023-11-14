import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddButton = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('AddScreen');
  };

  return (
    <View style={styles.containerStyle}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Ionicons
          testID="Add-Icon"
          name="ios-add-outline"
          size={30}
          color="black"
        />
      </Pressable>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  containerStyle: {
    marginRight: 15,
    backgroundColor: 'white',
  },
  pressed: {
    opacity: 0.4,
  },
});
