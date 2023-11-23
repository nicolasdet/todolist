import { View, StyleSheet } from 'react-native';
import AppText from '../../utils/Text.json';
import colors  from '../../utils/colors';
import { isTablet } from '../../utils/deviceInfo';
import TitleText from './TitleText';

const Header = () => {
  return (
    <View style={styles.container}>
		<View>
      		<TitleText text={AppText.Todo.Header.Title} />
	  		<TitleText text={AppText.Todo.Header.Hello} />
		</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: isTablet ? 200 : 100,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
  },
});
