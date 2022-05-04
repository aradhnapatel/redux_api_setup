import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpApi from '../component/SignUpApi';
import OtpVerify from '../component/OtpVerify';
import LoginApi from '../component/LoginApi';
import Home from '../component/Home';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginApi} />
        <Stack.Screen name="SignUp" component={SignUpApi} />
        <Stack.Screen name="Otp" component={OtpVerify} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
