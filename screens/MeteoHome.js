import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AdressSearch from '../components/AdressSearch/AdressSearch';
import MeteoDisplay from '../components/MeteoDisplay/MeteoDisplay';
import { Geocoding } from '../API/Geocoding';
import { Meteo } from '../API/Meteo';

const MeteoHome = () => {
  const [MeteoData, setMeteoData] = useState();
  const onSearchAdress = async (Adress) => {
    // On Geocode l'adresse et on récupère les coordonnées
    const GeocodeResult = await Geocoding(Adress);
    if (GeocodeResult.success) {
      // On récupère la météo
      const { lat, lon } = GeocodeResult.data[0];
      const MeteoResult = await Meteo(lat, lon);
      if (MeteoResult.success) {
        console.log(MeteoResult.data);
        return setMeteoData(MeteoResult.data);
      }
      // Gestion des erreur API
      alert('Une erreur est survenue dans la recherche de météo');
    } else {
      alert("Une erreur est survenue dans l'adresse");
    }
  };

  return (
    <View style={styles.container}>
      <AdressSearch onSearch={onSearchAdress} />
      <MeteoDisplay MeteoData={MeteoData} />
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
