import { View, Text, StyleSheet } from 'react-native';

const MeteoElement = ({
  label,
  value,
}: {
  label: string;
  value: string | string[];
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default MeteoElement;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '100%',
    marginTop: 10,
    paddingBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  value: {
    fontSize: 20,
    color: 'black',
  },
});
