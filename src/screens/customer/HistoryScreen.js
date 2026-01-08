/**
 * History Screen
 * View past pickup requests and receipts
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const HistoryScreen = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // TODO: Fetch from backend
    setHistory([
      {
        id: '1',
        date: '2026-01-05',
        wasteType: 'Household Waste',
        quantity: '3 bags',
        amount: '₵25.00',
        status: 'completed',
        driver: 'Kwame Mensah',
      },
      {
        id: '2',
        date: '2026-01-01',
        wasteType: 'Plastic',
        quantity: '2 bags',
        amount: '₵15.00',
        status: 'completed',
        driver: 'Ama Boateng',
      },
      {
        id: '3',
        date: '2025-12-28',
        wasteType: 'Bulky Items',
        quantity: '1 item',
        amount: '₵50.00',
        status: 'completed',
        driver: 'Yaw Osei',
      },
    ]);
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardDate}>{item.date}</Text>
        <View style={[styles.badge, styles.badgeCompleted]}>
          <Text style={styles.badgeText}>Completed</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.row}>
          <Text style={styles.label}>Type:</Text>
          <Text style={styles.value}>{item.wasteType}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Quantity:</Text>
          <Text style={styles.value}>{item.quantity}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Driver:</Text>
          <Text style={styles.value}>{item.driver}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.amount}>{item.amount}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.receiptButton}>
        <Text style={styles.receiptButtonText}>View Receipt</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  if (history.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>📋</Text>
          <Text style={styles.emptyTitle}>No Pickup History</Text>
          <Text style={styles.emptyText}>
            Your completed pickups will appear here
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pickup History</Text>
        <Text style={styles.subtitle}>{history.length} completed pickups</Text>
      </View>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
  },
  list: {
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  cardDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  badgeCompleted: {
    backgroundColor: '#27ae60',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardBody: {
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  value: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '500',
  },
  amount: {
    fontSize: 16,
    color: '#27ae60',
    fontWeight: 'bold',
  },
  receiptButton: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 15,
    alignItems: 'center',
  },
  receiptButtonText: {
    color: '#3498db',
    fontSize: 14,
    fontWeight: '600',
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
});

export default HistoryScreen;
