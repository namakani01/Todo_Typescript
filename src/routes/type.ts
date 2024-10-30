import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export type HomeScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type CrrateTaskScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;
