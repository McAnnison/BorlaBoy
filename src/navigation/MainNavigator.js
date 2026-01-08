/**
 * Main Navigator
 * Handles navigation for authenticated users (both customers and drivers)
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAuth} from '../context/AuthContext';
import CustomerNavigator from './CustomerNavigator';
import DriverNavigator from './DriverNavigator';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  const {userType} = useAuth();

  return userType === 'driver' ? <DriverNavigator /> : <CustomerNavigator />;
};

export default MainNavigator;
