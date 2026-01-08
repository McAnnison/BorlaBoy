/**
 * Driver Navigator
 * Bottom tab navigation for driver-facing features
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DriverHomeScreen from '../screens/driver/DriverHomeScreen';
import RequestsScreen from '../screens/driver/RequestsScreen';
import NavigationScreen from '../screens/driver/NavigationScreen';
import EarningsScreen from '../screens/driver/EarningsScreen';
import JobHistoryScreen from '../screens/driver/JobHistoryScreen';

const Tab = createBottomTabNavigator();

const DriverNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DriverHome"
        component={DriverHomeScreen}
        options={{title: 'Dashboard'}}
      />
      <Tab.Screen
        name="Requests"
        component={RequestsScreen}
        options={{title: 'Pickup Requests'}}
      />
      <Tab.Screen
        name="Navigation"
        component={NavigationScreen}
        options={{title: 'Navigate'}}
      />
      <Tab.Screen
        name="Earnings"
        component={EarningsScreen}
        options={{title: 'Earnings'}}
      />
      <Tab.Screen
        name="JobHistory"
        component={JobHistoryScreen}
        options={{title: 'Job History'}}
      />
    </Tab.Navigator>
  );
};

export default DriverNavigator;
