import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Routes
import Home from '../../screens/Home';
import TodoScreen from '../../screens/TodoScreen';
import AddScreen from '../../screens/AddScreen';
// Meteo app
import MeteoHome from '../../screens/MeteoHome';
// Icons
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const RootNavigation = createBottomTabNavigator();
const TodoStack = createNativeStackNavigator();
const MeteoStack = createNativeStackNavigator();

const TodoNavigator = () => {
  return (
    <TodoStack.Navigator screenOptions={{ headerShown: false }}>
      <TodoStack.Screen name="Home" component={Home} />
      <TodoStack.Screen name="TodoScreen" component={TodoScreen} />
      <TodoStack.Screen
        name="AddScreen"
        component={AddScreen}
        options={{ presentation: 'modal' }}
      />
    </TodoStack.Navigator>
  );
};

const MeteoNavigator = () => {
  return (
    <MeteoStack.Navigator screenOptions={{ headerShown: false }}>
      <MeteoStack.Screen name="MeteoHome" component={MeteoHome} />
    </MeteoStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <RootNavigation.Navigator screenOptions={{ headerShown: false }}>
      <RootNavigation.Screen
        name="Todo"
        component={TodoNavigator}
        options={{
          tabBarIcon: () => <FontAwesome name="list" size={24} color="black" />,
        }}
      />
      <RootNavigation.Screen
        name="Meteo"
        component={MeteoNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name="partly-sunny-sharp" size={24} color="black" />
          ),
        }}
      />
    </RootNavigation.Navigator>
  );
};

export default RootNavigator;
