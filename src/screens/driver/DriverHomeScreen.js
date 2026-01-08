/**
 * Driver Home Screen
 * Dashboard for drivers showing overview and stats
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

const DriverHomeScreen = ({navigation}) => {
  const {user} = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.greeting}>
          Welcome, {user?.name || 'Driver'}!
        </Text>
        <Text style={styles.subtitle}>Ready to make Ghana cleaner?</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Today's Jobs</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>₵480</Text>
            <Text style={styles.statLabel}>Today's Earnings</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>4.8⭐</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>156</Text>
            <Text style={styles.statLabel}>Total Jobs</Text>
          </View>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity
            style={[styles.actionButton, styles.primaryAction]}
            onPress={() => navigation.navigate('Requests')}>
            <Text style={styles.actionIcon}>📋</Text>
            <Text style={styles.actionText}>View Requests</Text>
            <Text style={styles.actionBadge}>3 New</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryAction]}
            onPress={() => navigation.navigate('Earnings')}>
            <Text style={styles.actionIcon}>💰</Text>
            <Text style={styles.actionText}>Earnings</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activeJobCard}>
          <Text style={styles.activeJobTitle}>Active Job</Text>
          <View style={styles.jobDetails}>
            <Text style={styles.jobLabel}>Location:</Text>
            <Text style={styles.jobValue}>Adenta Housing Down</Text>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.jobLabel}>Waste Type:</Text>
            <Text style={styles.jobValue}>Household - 3 bags</Text>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.jobLabel}>Customer:</Text>
            <Text style={styles.jobValue}>Ama Owusu</Text>
          </View>
          <TouchableOpacity
            style={styles.navigateButton}
            onPress={() => navigation.navigate('Navigation')}>
            <Text style={styles.navigateButtonText}>
              🧭 Navigate to Location
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 Driver Tip</Text>
          <Text style={styles.tipText}>
            Keep your vehicle clean and arrive on time to maintain high ratings
            and earn more!
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
    marginBottom: 25,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statCard: {
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
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  quickActions: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryAction: {
    backgroundColor: '#3498db',
  },
  secondaryAction: {
    backgroundColor: '#27ae60',
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  actionBadge: {
    backgroundColor: '#e74c3c',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    fontSize: 11,
    fontWeight: 'bold',
  },
  activeJobCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activeJobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  jobDetails: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  jobLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    width: 100,
  },
  jobValue: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '500',
    flex: 1,
  },
  navigateButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  navigateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipCard: {
    backgroundColor: '#fff3cd',
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#856404',
    lineHeight: 20,
  },
});

export default DriverHomeScreen;
