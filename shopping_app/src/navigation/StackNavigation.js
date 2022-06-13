import React from 'react';
import { View, Text, Button } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login'
import Register from '../components/Register'
import MyTabs from './Tab'

const Stack = createNativeStackNavigator();



const StackNavigation = () => {
    return (
        <>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="HomeCheck"
            component={MyTabs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </>
    )
}
export default StackNavigation;