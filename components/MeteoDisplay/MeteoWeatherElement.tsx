import { View, Text, Image, StyleSheet } from 'react-native';
import MeteoMetaData from '../../utils/MeteoInfo.json';

const MeteoWeatherElement = ({ code }: { code: string }) => {
  const label = MeteoMetaData[code]?.day.description;
  const url = MeteoMetaData[code]?.day.image;
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text>{label}</Text>
    </View>
  );
};

export default MeteoWeatherElement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '100%',
  },
  image: {
    width: 150,
    height: 150,
  },
});
