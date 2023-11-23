import { View, StyleSheet, ImageBackground } from 'react-native';
import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoList';
import colors from '../utils/colors';
import { isTablet } from '../utils/deviceInfo';
import AddButton from '../components/AddButton/AddButton';

const Home = (): React.JSX.Element => {
  return (
    <ImageBackground
      source={require('../assets/beach.jpg')}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.todoListContainer}>
          <TodoList />
        </View>
        <AddButton />
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: isTablet ? 0 : 30,
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
