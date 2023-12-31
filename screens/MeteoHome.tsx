import { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistMeteoContext } from '../store/Persist/PersistMeteoContext';
import AdressSearch from '../components/AdressSearch/AdressSearch';
import MeteoDisplay from '../components/MeteoDisplay/MeteoDisplay';
import { Geocoding } from '../API/Geocoding';
import { Meteo } from '../API/Meteo';

const MeteoHome = (): React.JSX.Element => {
  const [MeteoData, setMeteoData] = useState();
  const PersistAdressCtx = useContext(PersistMeteoContext);

  useEffect(() => {
    if (PersistAdressCtx.lastAdress !== '') {
      onSearchAdress(PersistAdressCtx.lastAdress);
    }
  }, [PersistAdressCtx.lastAdress]);

  // extraire la fonction
  const onSearchAdress = async (Adress: string) => {
    // On Geocode l'adresse et on récupère les coordonnées
    const GeocodeResult = await Geocoding(Adress);
    if (GeocodeResult.success) {
      // On récupère la météo
      const { lat, lon } = GeocodeResult.data[0];
      const MeteoResult = await Meteo(lat, lon);
      if (MeteoResult.success) {
        AsyncStorage.setItem('meteo-lastAdress', Adress);
        return setMeteoData(MeteoResult.data);
      }
      // Gestion des erreur API
      alert('Une erreur est survenue dans la recherche de météo');
    } else {
      alert("Une erreur est survenue dans l'adresse");
    }
  };

  return (
    <ImageBackground
      source={require('../assets/beach.jpg')}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <AdressSearch onSearch={onSearchAdress} />
        <MeteoDisplay MeteoData={MeteoData} />
      </View>
    </ImageBackground>
  );
};

export default MeteoHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },
});
