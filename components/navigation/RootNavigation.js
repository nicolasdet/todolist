import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Routes
import Home from '../../screens/Home';
import TodoScreen from '../../screens/TodoScreen';
import AddScreen from '../../screens/AddScreen';

const RootNavigation = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootNavigation.Navigator screenOptions={{ headerShown: false }}>
      <RootNavigation.Screen name="Home" component={Home} />
      <RootNavigation.Screen name="TodoScreen" component={TodoScreen} />
      <RootNavigation.Screen
        name="AddScreen"
        component={AddScreen}
        options={{ presentation: 'modal' }}
      />
    </RootNavigation.Navigator>
  );
};

export default RootNavigator;
