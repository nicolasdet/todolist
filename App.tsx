import { StrictMode } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './components/navigation/RootNavigation';
import TodoContextProvider from './store/todo/todo-context';

export default function App(): JSX.Element {
  return (
    <StrictMode>
      <StatusBar style="auto" />
      <TodoContextProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </TodoContextProvider>
    </StrictMode>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
