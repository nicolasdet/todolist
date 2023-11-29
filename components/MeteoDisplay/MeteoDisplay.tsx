import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { BasicShadow } from '../../utils/shadow';
import MeteoElement from './MeteoElement';
import MeteoWeatherElement from './MeteoWeatherElement';
import { isTablet } from '../../utils/deviceInfo';
import MeteoCard from './MeteoCard';

// Todo define MeteoData interface
interface MeteoDisplayInterface {
  MeteoData: any;
}

/*
{
	Maintenant: 
	Aujourdhui: 
	Demain: 
	ApresDemain
}
*/
const MeteoDisplay = ({ MeteoData }: MeteoDisplayInterface) => {
  console.log(MeteoData);
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
        <Text>Entrez une adresse pour obtenir la méteo</Text>
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
});
