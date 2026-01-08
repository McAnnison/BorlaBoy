/**
 * Request Pickup Screen
 * Allows customers to request waste collection
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
import {Picker} from '@react-native-picker/picker';

const RequestPickupScreen = ({navigation}) => {
  const [location, setLocation] = useState('');
  const [wasteType, setWasteType] = useState('household');
  const [quantity, setQuantity] = useState('');
  const [scheduleType, setScheduleType] = useState('immediate');
  const [scheduledDate, setScheduledDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [notes, setNotes] = useState('');

  const handleRequestPickup = () => {
    if (!location || !quantity) {
      Alert.alert('Error', 'Please fill in required fields');
      return;
    }

    const pickupRequest = {
      id: Date.now().toString(),
      location,
      wasteType,
      quantity,
      scheduleType,
      scheduledDate: scheduleType === 'later' ? scheduledDate : null,
      paymentMethod,
      notes,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // TODO: Save to backend/database
    Alert.alert(
      'Success',
      'Pickup request submitted! You will be notified when a driver accepts.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Tracking'),
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Request Pickup</Text>

        <Text style={styles.label}>Pickup Location *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter address or use GPS"
          value={location}
          onChangeText={setLocation}
        />
        <TouchableOpacity style={styles.gpsButton}>
          <Text style={styles.gpsButtonText}>📍 Use Current Location</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Waste Type *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={wasteType}
            onValueChange={setWasteType}
            style={styles.picker}>
            <Picker.Item label="Household Waste" value="household" />
            <Picker.Item label="Plastic" value="plastic" />
            <Picker.Item label="Bulky Items" value="bulky" />
            <Picker.Item label="E-Waste" value="ewaste" />
            <Picker.Item label="Garden Waste" value="garden" />
            <Picker.Item label="Mixed Waste" value="mixed" />
          </Picker>
        </View>

        <Text style={styles.label}>Quantity *</Text>
        <TextInput
          style={styles.input}
          placeholder="Number of bags/bins or estimated weight"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Schedule</Text>
        <View style={styles.scheduleButtons}>
          <TouchableOpacity
            style={[
              styles.scheduleButton,
              scheduleType === 'immediate' && styles.scheduleButtonActive,
            ]}
            onPress={() => setScheduleType('immediate')}>
            <Text
              style={[
                styles.scheduleButtonText,
                scheduleType === 'immediate' && styles.scheduleButtonTextActive,
              ]}>
              Immediate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.scheduleButton,
              scheduleType === 'later' && styles.scheduleButtonActive,
            ]}
            onPress={() => setScheduleType('later')}>
            <Text
              style={[
                styles.scheduleButtonText,
                scheduleType === 'later' && styles.scheduleButtonTextActive,
              ]}>
              Schedule Later
            </Text>
          </TouchableOpacity>
        </View>

        {scheduleType === 'later' && (
          <TextInput
            style={styles.input}
            placeholder="Date and time (e.g., Tomorrow 2PM)"
            value={scheduledDate}
            onChangeText={setScheduledDate}
          />
        )}

        <Text style={styles.label}>Payment Method</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={paymentMethod}
            onValueChange={setPaymentMethod}
            style={styles.picker}>
            <Picker.Item label="Cash" value="cash" />
            <Picker.Item label="Mobile Money (MoMo)" value="momo" />
            <Picker.Item label="Card" value="card" />
            <Picker.Item label="Subscription" value="subscription" />
          </Picker>
        </View>

        <Text style={styles.label}>Additional Notes</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Any special instructions..."
          value={notes}
          onChangeText={setNotes}
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleRequestPickup}>
          <Text style={styles.submitButtonText}>Submit Request</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: 15,
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  gpsButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  gpsButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  picker: {
    height: 50,
  },
  scheduleButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  scheduleButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#27ae60',
    alignItems: 'center',
  },
  scheduleButtonActive: {
    backgroundColor: '#27ae60',
  },
  scheduleButtonText: {
    color: '#27ae60',
    fontSize: 14,
    fontWeight: '600',
  },
  scheduleButtonTextActive: {
    color: 'white',
  },
  submitButton: {
    backgroundColor: '#27ae60',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RequestPickupScreen;
