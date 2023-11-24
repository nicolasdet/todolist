import { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Input from '../UI/Input';
import { isTablet } from '../../utils/deviceInfo';
import Color from '../../utils/colors';

const AdressSearch = ({ onSearch }) => {
  const [Adress, setAdress] = useState('233 boulevard saint denis');

  const submit = () => {
    onSearch(Adress);
  };

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
      <Pressable onPress={submit}>
        <Text>Rechercher</Text>
      </Pressable>
    </View>
  );
};

export default AdressSearch;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: isTablet ? '60%' : '80%',
    backgroundColor: Color.material,
    borderRadius: 10,
    padding: 20,
    marginTop: 30,
  },
  rowInput: {
    width: '100%',
  },
});
