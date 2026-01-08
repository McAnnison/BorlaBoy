/**
 * Tracking Screen
 * Live tracking of assigned aboboyaa driver
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const TrackingScreen = () => {
  const [activePickup, setActivePickup] = useState(null);
  const [driverLocation, setDriverLocation] = useState(null);
  const [estimatedArrival, setEstimatedArrival] = useState('15 minutes');

  useEffect(() => {
    // TODO: Fetch active pickup and driver location
    // Simulate active pickup
    setActivePickup({
      id: '1',
      driverName: 'Kwame Mensah',
      driverPhone: '+233 24 123 4567',
      vehicleNumber: 'GT 1234-20',
      status: 'on_the_way',
    });
  }, []);

  if (!activePickup) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>📍</Text>
          <Text style={styles.emptyTitle}>No Active Pickup</Text>
          <Text style={styles.emptyText}>
            Request a pickup to track your driver in real-time
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>🗺️ Map View</Text>
          <Text style={styles.mapSubtext}>
            Driver location will be shown here
          </Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Driver on the way</Text>
          </View>

          <Text style={styles.eta}>
            Estimated arrival: {estimatedArrival}
          </Text>

          <View style={styles.driverInfo}>
            <Text style={styles.driverLabel}>Driver</Text>
            <Text style={styles.driverName}>{activePickup.driverName}</Text>
            <Text style={styles.driverDetails}>
              Vehicle: {activePickup.vehicleNumber}
            </Text>
          </View>

          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callButtonText}>
              📞 Call Driver
            </Text>
          </TouchableOpacity>

          <View style={styles.timeline}>
            <View style={styles.timelineItem}>
              <View style={[styles.timelineDot, styles.timelineDotComplete]} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>Request Confirmed</Text>
                <Text style={styles.timelineTime}>5 minutes ago</Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={[styles.timelineDot, styles.timelineDotActive]} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>Driver Assigned</Text>
                <Text style={styles.timelineTime}>2 minutes ago</Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>Pickup Complete</Text>
                <Text style={styles.timelineTime}>Pending</Text>
              </View>
            </View>
          </View>
        </View>
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
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  mapPlaceholder: {
    height: 300,
    backgroundColor: '#e8f5e9',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  mapText: {
    fontSize: 40,
    marginBottom: 10,
  },
  mapSubtext: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  infoCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  statusBadge: {
    backgroundColor: '#27ae60',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  eta: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  driverInfo: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  driverLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  driverDetails: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  callButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  callButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeline: {
    marginTop: 10,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ddd',
    marginRight: 15,
    marginTop: 5,
  },
  timelineDotComplete: {
    backgroundColor: '#27ae60',
  },
  timelineDotActive: {
    backgroundColor: '#3498db',
  },
  timelineContent: {
    flex: 1,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 3,
  },
  timelineTime: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default TrackingScreen;
