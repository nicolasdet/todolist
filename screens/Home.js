import { View, StyleSheet } from 'react-native';
import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoList';
import { colors } from '../utils/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.todoListContainer}>
        <TodoList />
      </View>
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
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoListContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: 'wheat',
  },
});
