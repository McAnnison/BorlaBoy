/**
 * Customer Home Screen
 * Main dashboard for customers
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useAuth} from '../../context/AuthContext';

const HomeScreen = ({navigation}) => {
  const {user} = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.greeting}>Welcome, {user?.name || 'User'}!</Text>
        <Text style={styles.subtitle}>
          Keeping Ghana clean, one pickup at a time
        </Text>

        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('RequestPickup')}>
            <Text style={styles.actionIcon}>🗑️</Text>
            <Text style={styles.actionTitle}>Request Pickup</Text>
            <Text style={styles.actionSubtext}>Schedule waste collection</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Tracking')}>
            <Text style={styles.actionIcon}>📍</Text>
            <Text style={styles.actionTitle}>Track Pickup</Text>
            <Text style={styles.actionSubtext}>Live tracking</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('History')}>
            <Text style={styles.actionIcon}>📋</Text>
            <Text style={styles.actionTitle}>History</Text>
            <Text style={styles.actionSubtext}>View past pickups</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.actionIcon}>👤</Text>
            <Text style={styles.actionTitle}>Profile</Text>
            <Text style={styles.actionSubtext}>Manage account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>How it works</Text>
          <Text style={styles.infoText}>
            1. Request a pickup and select waste type{'\n'}
            2. Schedule immediate or later collection{'\n'}
            3. Track your aboboyaa driver in real-time{'\n'}
            4. Pay via cash, MoMo, or card
          </Text>
        </View>
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
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 30,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  actionCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  actionSubtext: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#27ae60',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: 'white',
    lineHeight: 22,
  },
});

export default HomeScreen;
