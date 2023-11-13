import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AdressSearch from '../components/AdressSearch/AdressSearch';
import MeteoDisplay from '../components/MeteoDisplay/MeteoDisplay';

const MeteoHome = () => {
  // Refactor absolument tout ;)
  async function onSearch() {
    try {
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&current_weather=true'
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.container}>
      <AdressSearch onSearch={onSearch} />
      <MeteoDisplay />
    </View>
  );
};

export default MeteoHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
