import { View, Pressable, StyleSheet, Text } from 'react-native';
import { RootStackNavigationProp } from '../navigation/NavigationTypes';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Color from '../../utils/colors';

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
		hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
      >
        <Ionicons
          testID="Add-Icon"
          name="ios-add-outline"
          size={32}
          color="black"
        />
      </Pressable>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  containerStyle: {
	position: 'absolute',
	bottom: 30,
	right: 30,
    backgroundColor: Color.material,
	width: 80,
	height: 80,
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: 40,
  },
  pressed: {
    opacity: 0.4,
  },
});
