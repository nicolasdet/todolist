import { View, StyleSheet } from 'react-native';
import AdressSearch from '../components/AdressSearch/AdressSearch';
import MeteoDisplay from '../components/MeteoDisplay/MeteoDisplay';

const MeteoHome = () => {
  return (
    <View style={styles.container}>
      <AdressSearch />
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
