/**
 * User Type Selection Screen
 * Allows users to choose between customer and driver accounts
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useAuth} from '../../context/AuthContext';

const UserTypeScreen = ({navigation}) => {
  const {setUserTypePreference} = useAuth();

  const selectUserType = async (type) => {
    await setUserTypePreference(type);
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to BorlaBoy</Text>
        <Text style={styles.subtitle}>
          Ghana's Premier Rubbish Pickup Service
        </Text>

        <TouchableOpacity
          style={[styles.button, styles.customerButton]}
          onPress={() => selectUserType('customer')}>
          <Text style={styles.buttonText}>I need waste pickup</Text>
          <Text style={styles.buttonSubtext}>Request rubbish collection</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.driverButton]}
          onPress={() => selectUserType('driver')}>
          <Text style={styles.buttonText}>I'm an Aboboyaa driver</Text>
          <Text style={styles.buttonSubtext}>Collect rubbish & earn</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 50,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  customerButton: {
    backgroundColor: '#27ae60',
  },
  driverButton: {
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonSubtext: {
    color: 'white',
    fontSize: 14,
  },
});

export default UserTypeScreen;
