import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { daysInCurrentMonth } from '../../../utils/dates';
import { BasicShadow } from '../../../utils/shadow';
import Color from '../../../utils/colors';
import GetDaysFromMonth from './GetDaysFromMonth';
import { isTablet } from '../../../utils/deviceInfo';

const DayMenu = ({ selectedDay, setSelectedDay }) => {
  const ActualMonthDayNumber = daysInCurrentMonth();

  const todayDayNum = new Date().getUTCDate();
  const ELToReturn = [];
  const getElement = (index: number, all = false, selected = false) => {
    return (
      <GetDaysFromMonth
        key={index}
        day={index}
        all={all}
        selected={selected}
        onPress={() => setSelectedDay(index)}
      />
    );
  };
  for (let i = todayDayNum - 1; i <= ActualMonthDayNumber; i++) {
    if (i === todayDayNum - 1) {
      ELToReturn.push(getElement(0, true, selectedDay === 0));
    } else {
      ELToReturn.push(getElement(i, false, selectedDay === i));
    }
    // Si on est une semaine avant alors on ajoute les prempier jours du moi suivant #Arbitraire
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {ELToReturn}
      </ScrollView>
    </View>
  );
};

export default DayMenu;

const styles = StyleSheet.create({
  container: {
    width: isTablet ? '70%' : '65%',
    height: 50,
    margin: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    ...BasicShadow,
  },
});
