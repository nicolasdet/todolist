import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './NavigationTypes';
// Routes
import Home from '../../screens/Home';
import TodoScreen from '../../screens/TodoScreen';
import AddScreen from '../../screens/AddScreen';
import TodoConfigScreen from '../../screens/TodoConfigScreen';
// Meteo app
import MeteoHome from '../../screens/MeteoHome';
// Icons
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Color from '../../utils/colors';
import { isTablet } from '../../utils/deviceInfo';

const RootNavigation = createBottomTabNavigator();
const TodoStack = createNativeStackNavigator<RootStackParamList>();
const MeteoStack = createNativeStackNavigator();

const TodoNavigator = (): React.JSX.Element => {
  return (
    <TodoStack.Navigator screenOptions={{ headerShown: false }}>
      <TodoStack.Screen name="Home" component={Home} />
      <TodoStack.Screen name="TodoScreen" component={TodoScreen} />
      <TodoStack.Screen
        name="AddScreen"
        component={AddScreen}
        options={{ presentation: 'modal' }}
      />
      <TodoStack.Screen
        name="TodoConfigScreen"
        component={TodoConfigScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </TodoStack.Navigator>
  );
};

const MeteoNavigator = (): React.JSX.Element => {
  return (
    <MeteoStack.Navigator screenOptions={{ headerShown: false }}>
      <MeteoStack.Screen name="MeteoHome" component={MeteoHome} />
    </MeteoStack.Navigator>
  );
};

const RootNavigator = (): React.JSX.Element => {
  return (
    <RootNavigation.Navigator
      initialRouteName="Meteo"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: isTablet ? 60 : 90 },
        tabBarActiveBackgroundColor: Color.material,
        tabBarInactiveBackgroundColor: Color.material,
        tabBarLabelStyle: {
          fontSize: 20,
          paddingBottom: 1,
        },
        tabBarActiveTintColor: Color.darkBlue,
      }}
    >
      <RootNavigation.Screen
        name="Todo"
        component={TodoNavigator}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="list" size={24} color={Color.darkBlue} />
          ),
          lazy: false,
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
