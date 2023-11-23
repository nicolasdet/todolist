import { View, Text, StyleSheet } from 'react-native';
import { mois } from '../../utils/dates';

const DateElement = ({ date }: { date: string }) => {
  const DateToDIsplay = new Date(date);
  const Day = DateToDIsplay.getDate();
  const Month = DateToDIsplay.getMonth() + 1;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {'' + Day + '-' + mois[Month].substring(0, 3)}
      </Text>
    </View>
  );
};

export default DateElement;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginRight: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
