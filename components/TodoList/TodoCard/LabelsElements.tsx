import { View, StyleSheet, Text } from 'react-native';
import { BasicShadow } from '../../../utils/shadow';

const LabelsElements = ({ labels }: { labels: string[] }) => {
  return (
    <View style={styles.container}>
      {labels.map((label) => (
        <View style={styles.LabelContainer} key={label}>
          <Text>{label}</Text>
        </View>
      ))}
    </View>
  );
};

export default LabelsElements;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  LabelContainer: {
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    ...BasicShadow,
  },
});
