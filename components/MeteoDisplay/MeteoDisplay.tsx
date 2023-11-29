import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MeteoCard from './MeteoCard';

// Todo define MeteoData interface
interface MeteoDisplayInterface {
  MeteoData: any;
}

const MeteoDisplay = ({ MeteoData }: MeteoDisplayInterface) => {
  return (
    <View style={styles.container}>
      {MeteoData ? (
        <ScrollView horizontal>
          <MeteoCard MeteoData={MeteoData.current} label="Maintenant" />
          {MeteoData.daily.map((day, index) => (
            <MeteoCard
              key={index}
              MeteoData={day}
              label={day.date}
              predictionDaily
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.noMeteoTextContainer}>
          <Text style={styles.noMeteoText}>
            Entrez une adresse pour obtenir la méteo
          </Text>
        </View>
      )}
    </View>
  );
};

export default MeteoDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  noMeteoTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMeteoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
