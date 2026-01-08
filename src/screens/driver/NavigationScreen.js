/**
 * Navigation Screen
 * GPS navigation to customer location
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const NavigationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapIcon}>🗺️</Text>
        <Text style={styles.mapText}>Navigation Map</Text>
        <Text style={styles.mapSubtext}>
          GPS navigation will be displayed here
        </Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.destinationInfo}>
          <Text style={styles.label}>Destination</Text>
          <Text style={styles.destination}>Adenta Housing Down</Text>
          <Text style={styles.eta}>ETA: 12 minutes (2.5 km)</Text>
        </View>

        <View style={styles.customerInfo}>
          <Text style={styles.customerLabel}>Customer Details</Text>
          <Text style={styles.customerName}>Ama Owusu</Text>
          <Text style={styles.customerPhone}>+233 24 123 4567</Text>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.buttonText}>📞 Call Customer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.directionsButton}>
            <Text style={styles.buttonText}>🧭 Open in Maps</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.jobDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Waste Type:</Text>
            <Text style={styles.detailValue}>Household</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Quantity:</Text>
            <Text style={styles.detailValue}>3 bags</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Payment:</Text>
            <Text style={styles.paymentValue}>₵25 (MoMo)</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.completeButton}>
          <Text style={styles.completeButtonText}>
            ✓ Mark as Completed
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
  mapPlaceholder: {
    height: 350,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapIcon: {
    fontSize: 60,
    marginBottom: 10,
  },
  mapText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  mapSubtext: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  infoCard: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: 20,
  },
  destinationInfo: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  destination: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  eta: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: '600',
  },
  customerInfo: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  customerLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  customerPhone: {
    fontSize: 14,
    color: '#3498db',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  callButton: {
    flex: 1,
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  directionsButton: {
    flex: 1,
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  jobDetails: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  detailLabel: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  detailValue: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '500',
  },
  paymentValue: {
    fontSize: 14,
    color: '#27ae60',
    fontWeight: 'bold',
  },
  completeButton: {
    backgroundColor: '#27ae60',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
  },
  completeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NavigationScreen;
