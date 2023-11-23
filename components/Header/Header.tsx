import { View, StyleSheet } from 'react-native';
import AppText from '../../utils/Text.json';
import colors from '../../utils/colors';
import { isTablet } from '../../utils/deviceInfo';
import TitleText from './TitleText';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <TitleText text={AppText.Todo.Header.Hello} />
        <TitleText text={AppText.Todo.Header.Title} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: isTablet ? 200 : 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: isTablet ? 'transparent' : colors.material,
    margin: isTablet ? 0 : 10,
    borderRadius: 10,
    opacity: 0.8,
  },
});
