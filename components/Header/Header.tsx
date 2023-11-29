import { View, StyleSheet } from 'react-native';
import AppText from '../../utils/Text.json';
import colors from '../../utils/colors';
import { isTablet } from '../../utils/deviceInfo';
import TitleText from './TitleText';
import { BasicShadow } from '../../utils/shadow';

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
    height: isTablet ? 150 : 100,
    width: isTablet ? '40%' : '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: isTablet ? colors.lightBlue : colors.lightBlue,
    borderRadius: 10,
    opacity: 0.85,
    ...BasicShadow,
  },
});
