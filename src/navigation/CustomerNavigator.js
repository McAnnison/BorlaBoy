/**
 * Customer Navigator
 * Bottom tab navigation for customer-facing features
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/customer/HomeScreen';
import RequestPickupScreen from '../screens/customer/RequestPickupScreen';
import TrackingScreen from '../screens/customer/TrackingScreen';
import HistoryScreen from '../screens/customer/HistoryScreen';
import ProfileScreen from '../screens/customer/ProfileScreen';

const Tab = createBottomTabNavigator();

const CustomerNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="RequestPickup"
        component={RequestPickupScreen}
        options={{title: 'Request Pickup'}}
      />
      <Tab.Screen
        name="Tracking"
        component={TrackingScreen}
        options={{title: 'Track Pickup'}}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{title: 'History'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default CustomerNavigator;
