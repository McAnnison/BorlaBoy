/**
 * BorlaBoy App Entry Point
 * A rubbish pickup app for Ghana
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthProvider} from './src/context/AuthContext';
import AuthNavigator from './src/navigation/AuthNavigator';
import MainNavigator from './src/navigation/MainNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Auth" component={AuthNavigator} />
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
