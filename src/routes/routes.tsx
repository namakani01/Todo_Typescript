import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Homescreen/Home';
import {RootStackParamList} from './type';
import Createtask from '../screens/Createtaskscreen/Createtask';
import Task from '../screens/Taskscreen/Task';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerTitle: 'Create New Task',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
          }}
          name="Newtask"
          component={Createtask}
        />

        <Stack.Screen options={{
            headerTitle: 'Task',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
          }} name="Task" component={Task}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
