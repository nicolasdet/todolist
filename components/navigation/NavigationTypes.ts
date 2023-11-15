import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import type { CompositeScreenProps } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  TodoScreen: undefined;
  AddScreen: { id?: string; title?: string } | undefined;
};

export type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type TodoScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'TodoScreen'
>;
export type AddScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'AddScreen'
>;

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
