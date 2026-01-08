/**
 * Authentication Context
 * Manages user authentication state and methods
 */

import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState(null); // 'customer' or 'driver'

  useEffect(() => {
    loadUserFromStorage();
  }, []);

  const loadUserFromStorage = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      const userTypeData = await AsyncStorage.getItem('userType');
      if (userData) {
        setUser(JSON.parse(userData));
        setUserType(userTypeData);
      }
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    try {
      // TODO: Implement actual authentication with Firebase
      const userData = {
        id: Date.now().toString(),
        email,
        name: 'User Name',
        phone: '',
        location: '',
      };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      return {success: true};
    } catch (error) {
      return {success: false, error: error.message};
    }
  };

  const signUp = async (email, password, name, phone) => {
    try {
      // TODO: Implement actual authentication with Firebase
      const userData = {
        id: Date.now().toString(),
        email,
        name,
        phone,
        location: '',
      };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      return {success: true};
    } catch (error) {
      return {success: false, error: error.message};
    }
  };

  const signInWithGoogle = async () => {
    try {
      // TODO: Implement Google Sign-In
      return {success: false, error: 'Google Sign-In not implemented yet'};
    } catch (error) {
      return {success: false, error: error.message};
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('userType');
      setUser(null);
      setUserType(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const updatedUser = {...user, ...profileData};
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      return {success: true};
    } catch (error) {
      return {success: false, error: error.message};
    }
  };

  const setUserTypePreference = async (type) => {
    try {
      await AsyncStorage.setItem('userType', type);
      setUserType(type);
    } catch (error) {
      console.error('Error setting user type:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        userType,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
        updateProfile,
        setUserTypePreference,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
