import { View, Text, StyleSheet } from 'react-native';
import { BasicShadow } from '../../utils/shadow';
import MeteoElement from './MeteoElement';
import MeteoWeatherElement from './MeteoWeatherElement';
import { isTablet } from '../../utils/deviceInfo';

interface MeteoDisplayInterface {
  MeteoData: any;
}

const MeteoDisplay = ({ MeteoData }: MeteoDisplayInterface) => {
  return (
    <View style={styles.container}>
      {MeteoData ? (
        <>
          <Text>Maintenant</Text>
          <MeteoWeatherElement code={MeteoData.current_weather.weathercode} />
          <MeteoElement
            label="temperature"
            value={MeteoData.current_weather.temperature}
          />
          <MeteoElement
            label="Vent"
            value={`${MeteoData.current_weather.windspeed} Km/h`}
          />
        </>
      ) : (
        <Text>Entrez une adresse pour obtenir la méteo</Text>
      )}
    </View>
  );
};

export default MeteoDisplay;

const styles = StyleSheet.create({
  container: {
    width: isTablet ? '30%' : '80%',
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 30,
    padding: 20,
    borderRadius: 10,
    ...BasicShadow,
  },
});
