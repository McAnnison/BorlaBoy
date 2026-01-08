/**
 * Profile Screen
 * User profile management
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import {useAuth} from '../../context/AuthContext';

const ProfileScreen = ({navigation}) => {
  const {user, updateProfile, signOut} = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [location, setLocation] = useState(user?.location || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleUpdateProfile = async () => {
    const result = await updateProfile({name, phone, location, email});
    if (result.success) {
      Alert.alert('Success', 'Profile updated successfully');
    } else {
      Alert.alert('Error', result.error);
    }
  };

  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: async () => {
            await signOut();
            navigation.reset({
              index: 0,
              routes: [{name: 'Auth'}],
            });
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {name ? name.charAt(0).toUpperCase() : 'U'}
            </Text>
          </View>
          <Text style={styles.headerTitle}>{name || 'User'}</Text>
          <Text style={styles.headerSubtitle}>{email}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Default Location</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="Enter your default address"
          />

          <TouchableOpacity
            style={styles.updateButton}
            onPress={handleUpdateProfile}>
            <Text style={styles.updateButtonText}>Update Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Notifications</Text>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Payment Methods</Text>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Help & Support</Text>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>About BorlaBoy</Text>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#27ae60',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: 10,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  updateButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  settingArrow: {
    fontSize: 24,
    color: '#7f8c8d',
  },
  signOutButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
