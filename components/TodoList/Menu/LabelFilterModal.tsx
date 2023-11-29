import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LabelContext } from '../../../store/todo/Labels/LabelContext';
import { BasicShadow } from '../../../utils/shadow';
import Animated, { FadeIn, FadeOut, Easing } from 'react-native-reanimated';
import { isTablet } from '../../../utils/deviceInfo';
import LabelFilterItem from './LabelFilterItem';

const LabelFilterModal = () => {
  const labelCtx = useContext(LabelContext);
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
      {labelCtx.labels.length > 0 ? (
        labelCtx.labels.map((label) => (
          <LabelFilterItem key={label.id} label={label} />
        ))
      ) : (
        <Text>Pas de label pour l'instant</Text>
      )}
    </Animated.View>
  );
};

export default LabelFilterModal;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 100,
    right: 50,
    width: isTablet ? 400 : 200,
    height: 200,
    zIndex: 9999999,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    ...BasicShadow,
  },
});
