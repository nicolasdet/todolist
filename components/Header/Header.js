import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { isTablet } from '../../utils/deviceInfo';
import AddButton from './AddButton';
import TitleText from './TitleText';

const Header = () => {
  return (
    <View style={styles.container}>
      <TitleText text="Ma liste de taches" />
      <AddButton />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: isTablet ? '50%' : '90%',
    backgroundColor: colors.blue,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
