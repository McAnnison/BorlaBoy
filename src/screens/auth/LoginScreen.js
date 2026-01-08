/**
 * Login Screen
 * Handles user authentication via email/phone and Google Sign-In
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import {useAuth} from '../../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn, signInWithGoogle, userType} = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const result = await signIn(email, password);
    if (result.success) {
      navigation.replace('Main');
    } else {
      Alert.alert('Error', result.error);
    }
  };

  const handleGoogleSignIn = async () => {
    const result = await signInWithGoogle();
    if (result.success) {
      navigation.replace('Main');
    } else {
      Alert.alert('Error', result.error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          {userType === 'driver' ? 'Driver Login' : 'Customer Login'}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.googleButton]}
          onPress={handleGoogleSignIn}>
          <Text style={styles.buttonText}>Sign In with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>
            Don't have an account? Sign Up
          </Text>
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
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#3498db',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
});

export default LoginScreen;
