import { useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const dateToDisplay = date.toLocaleString('fr-FR').slice(0, 10);

  return (
    <View>
      {/* <Button onPress={showDatepicker} title={`${dateToDisplay}`} /> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={Platform.OS === 'ios' ? mode : 'date'}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
