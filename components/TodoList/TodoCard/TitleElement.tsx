import { View, Text, StyleSheet } from 'react-native';

const TitleElement = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>{title}</Text>
    </View>
  );
};

export default TitleElement;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  TitleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
