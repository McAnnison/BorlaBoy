/**
 * Requests Screen
 * Shows available pickup requests for drivers to accept
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

const RequestsScreen = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // TODO: Fetch from backend
    setRequests([
      {
        id: '1',
        customerName: 'Ama Owusu',
        location: 'Adenta Housing Down',
        wasteType: 'Household',
        quantity: '3 bags',
        distance: '2.5 km',
        payment: '₵25',
        paymentMethod: 'MoMo',
        scheduledTime: 'Immediate',
      },
      {
        id: '2',
        customerName: 'Kofi Annan',
        location: 'Madina Market',
        wasteType: 'Plastic',
        quantity: '5 bags',
        distance: '4.1 km',
        payment: '₵30',
        paymentMethod: 'Cash',
        scheduledTime: 'Tomorrow 9AM',
      },
      {
        id: '3',
        customerName: 'Akua Serwaa',
        location: 'East Legon',
        wasteType: 'Bulky Items',
        quantity: '1 sofa',
        distance: '6.8 km',
        payment: '₵60',
        paymentMethod: 'Card',
        scheduledTime: 'Today 3PM',
      },
    ]);
  }, []);

  const handleAcceptRequest = (request) => {
    Alert.alert(
      'Accept Request',
      `Accept pickup from ${request.customerName}?`,
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Accept',
          onPress: () => {
            setRequests(prev => prev.filter(r => r.id !== request.id));
            Alert.alert(
              'Success',
              'Request accepted! Navigate to customer location.',
            );
          },
        },
      ],
    );
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.customerName}>{item.customerName}</Text>
          <Text style={styles.location}>📍 {item.location}</Text>
        </View>
        <View style={styles.distanceBadge}>
          <Text style={styles.distanceText}>{item.distance}</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.row}>
          <Text style={styles.label}>Waste Type:</Text>
          <Text style={styles.value}>{item.wasteType}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Quantity:</Text>
          <Text style={styles.value}>{item.quantity}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Schedule:</Text>
          <Text style={styles.value}>{item.scheduledTime}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Payment:</Text>
          <Text style={styles.payment}>
            {item.payment} ({item.paymentMethod})
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.acceptButton}
        onPress={() => handleAcceptRequest(item)}>
        <Text style={styles.acceptButtonText}>Accept Request</Text>
      </TouchableOpacity>
    </View>
  );

  if (requests.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>📋</Text>
          <Text style={styles.emptyTitle}>No Requests Available</Text>
          <Text style={styles.emptyText}>
            New pickup requests will appear here
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Available Requests</Text>
        <Text style={styles.subtitle}>{requests.length} requests nearby</Text>
      </View>
      <FlatList
        data={requests}
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
    alignItems: 'flex-start',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  distanceBadge: {
    backgroundColor: '#3498db',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  distanceText: {
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
  payment: {
    fontSize: 16,
    color: '#27ae60',
    fontWeight: 'bold',
  },
  acceptButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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

export default RequestsScreen;
