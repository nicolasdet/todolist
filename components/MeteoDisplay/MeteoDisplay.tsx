import { View, Text, StyleSheet } from 'react-native';
import { BasicShadow } from '../../utils/shadow';

interface MeteoDisplayInterface {
  MeteoData: any;
}

const MeteoDisplay = ({ MeteoData }: MeteoDisplayInterface) => {
  return (
    <View style={styles.container}>
      {MeteoData ? (
        <Text>{MeteoData.current_weather.weathercode}</Text>
      ) : (
        <Text>Entrez une adresse pour obtenir la méteo</Text>
      )}
    </View>
  );
};

export default MeteoDisplay;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    ...BasicShadow,
  },
});
