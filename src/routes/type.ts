import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Newtask: undefined;
  Task: undefined;
};

export type HomeScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type CreateTaskScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Newtask'
>;

export type TaskScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Task'
>;
