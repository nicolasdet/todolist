import { View, Text, StyleSheet } from 'react-native';

const MeteoDisplay = () => {
  return (
    <View style={styles.container}>
      <Text>MeteoDisplay</Text>
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
