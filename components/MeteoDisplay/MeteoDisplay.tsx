import { View, Text, StyleSheet } from 'react-native';

interface MeteoDisplayInterface {
	MeteoData: any;
}

const MeteoDisplay = ({ MeteoData }: MeteoDisplayInterface) => {
  return (
    <View style={styles.container}>
      {MeteoData ? (
        <Text>{MeteoData.current_weather.weathercode}</Text>
      ) : (
        <Text>Pas de Méteo pour l'intant</Text>
      )}
    </View>
  );
};

export default MeteoDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
