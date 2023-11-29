import { View, Text, StyleSheet } from 'react-native';
import MeteoElement from './MeteoElement';
import MeteoWeatherElement from './MeteoWeatherElement';
import { isTablet } from '../../utils/deviceInfo';
import { BasicShadow } from '../../utils/shadow';

interface MeteoCardInterface {
  MeteoData: {
    weathercode: string;
    temperature: string;
    windspeed: string;
  };
  label: string;
  predictionDaily?: boolean;
  predictionHourly?: boolean;
}

const MeteoCard = ({
  MeteoData,
  label,
  predictionDaily = false,
  predictionHourly = false,
}: MeteoCardInterface) => {
  const { weathercode, temperature, windspeed } = MeteoData;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <MeteoWeatherElement code={weathercode} />
      <MeteoElement label="temperature" value={temperature} />
      <MeteoElement label="Vent" value={`${windspeed} Km/h`} />
    </View>
  );
};

export default MeteoCard;

const styles = StyleSheet.create({
  container: {
    width: isTablet ? 300 : 250,
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 30,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    ...BasicShadow,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
