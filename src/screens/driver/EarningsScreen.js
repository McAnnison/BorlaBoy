/**
 * Earnings Screen
 * Driver earnings dashboard
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const EarningsScreen = () => {
  const [period, setPeriod] = useState('today');

  const earningsData = {
    today: {
      total: '₵480',
      jobs: 12,
      cash: '₵200',
      momo: '₵180',
      card: '₵100',
    },
    week: {
      total: '₵2,340',
      jobs: 56,
      cash: '₵1,000',
      momo: '₵840',
      card: '₵500',
    },
    month: {
      total: '₵9,850',
      jobs: 234,
      cash: '₵4,200',
      momo: '₵3,650',
      card: '₵2,000',
    },
  };

  const current = earningsData[period];

  const calculateAveragePerJob = () => {
    if (current.jobs === 0) {
      return '0';
    }
    const totalAmount = parseInt(current.total.replace(/[^\d]/g, ''));
    return (totalAmount / current.jobs).toFixed(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Earnings</Text>

        <View style={styles.periodSelector}>
          <TouchableOpacity
            style={[
              styles.periodButton,
              period === 'today' && styles.periodButtonActive,
            ]}
            onPress={() => setPeriod('today')}>
            <Text
              style={[
                styles.periodText,
                period === 'today' && styles.periodTextActive,
              ]}>
              Today
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.periodButton,
              period === 'week' && styles.periodButtonActive,
            ]}
            onPress={() => setPeriod('week')}>
            <Text
              style={[
                styles.periodText,
                period === 'week' && styles.periodTextActive,
              ]}>
              This Week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.periodButton,
              period === 'month' && styles.periodButtonActive,
            ]}
            onPress={() => setPeriod('month')}>
            <Text
              style={[
                styles.periodText,
                period === 'month' && styles.periodTextActive,
              ]}>
              This Month
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>Total Earnings</Text>
          <Text style={styles.totalAmount}>{current.total}</Text>
          <Text style={styles.totalJobs}>{current.jobs} completed jobs</Text>
        </View>

        <View style={styles.breakdownCard}>
          <Text style={styles.breakdownTitle}>Payment Breakdown</Text>

          <View style={styles.breakdownItem}>
            <View style={styles.breakdownLeft}>
              <View style={[styles.breakdownDot, {backgroundColor: '#27ae60'}]} />
              <Text style={styles.breakdownLabel}>Cash</Text>
            </View>
            <Text style={styles.breakdownAmount}>{current.cash}</Text>
          </View>

          <View style={styles.breakdownItem}>
            <View style={styles.breakdownLeft}>
              <View style={[styles.breakdownDot, {backgroundColor: '#3498db'}]} />
              <Text style={styles.breakdownLabel}>Mobile Money</Text>
            </View>
            <Text style={styles.breakdownAmount}>{current.momo}</Text>
          </View>

          <View style={styles.breakdownItem}>
            <View style={styles.breakdownLeft}>
              <View style={[styles.breakdownDot, {backgroundColor: '#9b59b6'}]} />
              <Text style={styles.breakdownLabel}>Card</Text>
            </View>
            <Text style={styles.breakdownAmount}>{current.card}</Text>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>
              ₵{calculateAveragePerJob()}
            </Text>
            <Text style={styles.statLabel}>Avg per Job</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>4.8⭐</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.withdrawButton}>
          <Text style={styles.withdrawButtonText}>💳 Withdraw Earnings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.historyButton}>
          <Text style={styles.historyButtonText}>View Full History</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 5,
    marginBottom: 20,
  },
  periodButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  periodButtonActive: {
    backgroundColor: '#3498db',
  },
  periodText: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '600',
  },
  periodTextActive: {
    color: 'white',
  },
  totalCard: {
    backgroundColor: '#27ae60',
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  totalLabel: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 10,
  },
  totalAmount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  totalJobs: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
  breakdownCard: {
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
  breakdownTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  breakdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  breakdownLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  breakdownDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  breakdownLabel: {
    fontSize: 16,
    color: '#2c3e50',
  },
  breakdownAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
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
  withdrawButton: {
    backgroundColor: '#3498db',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  withdrawButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  historyButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3498db',
  },
  historyButtonText: {
    color: '#3498db',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default EarningsScreen;
