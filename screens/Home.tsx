import { View, StyleSheet, ImageBackground } from 'react-native';
import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoList';
import colors  from '../utils/colors';

const Home = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
	<ImageBackground source={require('../assets/beach.jpg')} resizeMode="cover" style={styles.image}>
		<View style={styles.headerContainer}>
			<Header />
		</View>
      <View style={styles.todoListContainer}>
        <TodoList />
      </View>
	  </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    flex: 1,
	width: '100%',
  },
  todoListContainer: {
    flex: 5,
	margin: 10,
  },
});
