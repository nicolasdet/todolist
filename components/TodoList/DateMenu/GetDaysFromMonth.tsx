import { View, Text, StyleSheet, Pressable } from 'react-native';
import { BasicShadow } from '../../../utils/shadow';

const GetDaysFromMonth = ({
  day,
  all,
  selected,
  onPress,
}: {
  day: number;
  all: boolean;
  selected: boolean;
  onPress: () => void;
}) => {
  return (
    <Pressable
      style={({ pressed }) => {
        let displayStyle = [styles.container];
        let optionnalStyle = [];
        selected && optionnalStyle.push(styles.selected);
        pressed && optionnalStyle.push(styles.pressed);
        return [displayStyle, optionnalStyle];
      }}
      onPress={() => {
        onPress();
      }}
    >
      <Text style={styles.text}>{all ? 'Tous' : day}</Text>
    </Pressable>
  );
};

export default GetDaysFromMonth;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    ...BasicShadow,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  selected: {
    backgroundColor: 'pink',
  },
  pressed: {
    opacity: 0.5,
  },
});
