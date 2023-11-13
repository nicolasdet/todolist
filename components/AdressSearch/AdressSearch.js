import { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Input from '../UI/Input';
import { isTablet } from '../../utils/deviceInfo';

const AdressSearch = ({ onSearch }) => {
  const [Adress, setAdress] = useState('');

  return (
    <View style={styles.container}>
      <Input
        textInputConfig={{
          onChangeText: setAdress,
          value: Adress,
        }}
        style={styles.rowInput}
        label="Entrez une adresse"
      />
      <Pressable onPress={onSearch}>
        <Text>Rechercher</Text>
      </Pressable>
    </View>
  );
};

export default AdressSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: isTablet ? '40%' : '80%',
  },
  rowInput: {
    width: '100%',
  },
});
