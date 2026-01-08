/**
 * Authentication Navigator
 * Handles navigation for unauthenticated users
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import UserTypeScreen from '../screens/auth/UserTypeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserType"
        component={UserTypeScreen}
        options={{title: 'Choose Account Type'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Sign In'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{title: 'Create Account'}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
