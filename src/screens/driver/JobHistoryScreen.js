/**
 * Job History Screen
 * Driver's completed jobs history
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

const JobHistoryScreen = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // TODO: Fetch from backend
    setHistory([
      {
        id: '1',
        date: '2026-01-08',
        time: '2:30 PM',
        customer: 'Ama Owusu',
        location: 'Adenta Housing Down',
        wasteType: 'Household',
        quantity: '3 bags',
        earnings: '₵25',
        paymentMethod: 'MoMo',
        rating: 5,
      },
      {
        id: '2',
        date: '2026-01-08',
        time: '11:45 AM',
        customer: 'Kofi Mensah',
        location: 'Madina Market',
        wasteType: 'Plastic',
        quantity: '2 bags',
        earnings: '₵20',
        paymentMethod: 'Cash',
        rating: 4,
      },
      {
        id: '3',
        date: '2026-01-07',
        time: '4:15 PM',
        customer: 'Yaw Boateng',
        location: 'East Legon',
        wasteType: 'Bulky Items',
        quantity: '1 sofa',
        earnings: '₵60',
        paymentMethod: 'Card',
        rating: 5,
      },
    ]);
  }, []);

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.earningsBadge}>
          <Text style={styles.earnings}>{item.earnings}</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.row}>
          <Text style={styles.label}>Customer:</Text>
          <Text style={styles.value}>{item.customer}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>{item.location}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Waste Type:</Text>
          <Text style={styles.value}>{item.wasteType}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Quantity:</Text>
          <Text style={styles.value}>{item.quantity}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Payment:</Text>
          <Text style={styles.value}>{item.paymentMethod}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Rating:</Text>
          <Text style={styles.stars}>{renderStars(item.rating)}</Text>
        </View>
      </View>
    </View>
  );

  if (history.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>📋</Text>
          <Text style={styles.emptyTitle}>No Job History</Text>
          <Text style={styles.emptyText}>
            Your completed jobs will appear here
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Job History</Text>
        <Text style={styles.subtitle}>{history.length} completed jobs</Text>
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
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  time: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 3,
  },
  earningsBadge: {
    backgroundColor: '#27ae60',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  earnings: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardBody: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  value: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '500',
    flex: 1,
    textAlign: 'right',
  },
  stars: {
    fontSize: 14,
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

export default JobHistoryScreen;
