import { View, StyleSheet } from 'react-native';
import AppText from '../../utils/Text.json';
import colors  from '../../utils/colors';
import { isTablet } from '../../utils/deviceInfo';
import AddButton from './AddButton';
import TitleText from './TitleText';

const Header = () => {
  return (
    <View style={styles.container}>
      <TitleText text={AppText.Todo.Header.Title} />
      <AddButton />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: isTablet ? '60%' : '90%',
    backgroundColor: colors.blue,
    height: isTablet ? 70 : 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
	borderRadius: 6,
	opacity: 0.8
  },
});
