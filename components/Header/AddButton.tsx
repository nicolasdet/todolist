import { View, Pressable, StyleSheet, Text } from 'react-native';
import { RootStackNavigationProp } from '../navigation/NavigationTypes';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddButton = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
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
	width: 30,
	height: 30,
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: 15,
  },
  pressed: {
    opacity: 0.4,
  },
});
