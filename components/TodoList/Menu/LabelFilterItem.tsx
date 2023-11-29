import { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LabelContext } from '../../../store/todo/Labels/LabelContext';
import { Label } from '../../../store/todo/Labels/LabelContext';

const LabelFilterItem = ({ label }: { label: Label }) => {
  const labelCtx = useContext(LabelContext);
  const { id, name, color } = label;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

export default LabelFilterItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
