import { View, Text, StyleSheet, Pressable } from 'react-native';
import { BasicShadow } from '../../../utils/shadow';

const GetDaysFromMonth = ({
  day,
  all,
  selected,
}: {
  day: number;
  all: boolean;
  selected: boolean;
}) => {
  return (
    <Pressable
      style={({ pressed }) => {
        let displayStyle = [styles.container];
        selected && displayStyle.push({ backgroundColor: 'pink' });
        pressed && displayStyle.push({ opacity: 0.5 });
        return displayStyle;
      }}
      onPress={() => {
        console.log('press');
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
});
