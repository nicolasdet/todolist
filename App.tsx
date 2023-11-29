import { StrictMode } from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './components/navigation/RootNavigation';

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
