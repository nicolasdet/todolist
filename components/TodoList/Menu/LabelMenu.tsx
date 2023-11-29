import { useState } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import LabelFilterModal from './LabelFilterModal';
import { BasicShadow } from '../../../utils/shadow';
export const LabelMenu = () => {
  const [filterOpen, setfilterOpen] = useState(false);

  return (
    <Pressable
      style={styles.container}
      onPress={() => setfilterOpen(!filterOpen)}
    >
      {!filterOpen && <Text style={styles.text}>filtrer</Text>}
      {filterOpen && <LabelFilterModal />}
    </Pressable>
  );
};

export default LabelMenu;

const styles = StyleSheet.create({
  container: {
    width: '25%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    ...BasicShadow,
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
});
