import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import type { CompositeScreenProps } from '@react-navigation/native';
import { Todo } from '../../store/todo/todo-context';

export type RootStackParamList = {
  Home: undefined;
  TodoScreen: undefined;
  AddScreen: { id?: string; todo?: Todo } | undefined;
  TodoConfigScreen: { id?: string; todo?: Todo } | undefined;
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

export type TodoConfigScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'TodoConfigScreen'
>;

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
