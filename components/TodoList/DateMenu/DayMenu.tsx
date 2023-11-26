import { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { daysInCurrentMonth } from '../../../utils/dates';
import { BasicShadow } from '../../../utils/shadow';
import Color from '../../../utils/colors';
import GetDaysFromMonth from './GetDaysFromMonth';

const DayMenu = () => {
  const ActualMonthDayNumber = daysInCurrentMonth();
  const ELToReturn = [];
  const getElement = (index: number, all = false, selected = false) => {
    return (
      <GetDaysFromMonth key={index} day={index} all={all} selected={selected} />
    );
  };
  for (let i = 0; i < ActualMonthDayNumber; i++) {
    if (i === 0) {
      ELToReturn.push(getElement(i, true, true));
    } else {
      ELToReturn.push(getElement(i, false, false));
    }
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
    height: 50,
    margin: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    ...BasicShadow,
  },
});
