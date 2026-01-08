# BorlaBoy 🗑️

A mobile application for refuse collection services in Ghana, connecting customers with aboboyaa (tricycle) drivers for efficient waste management.

## Overview

BorlaBoy is a comprehensive waste pickup solution designed specifically for Ghana's waste management needs. The app facilitates seamless connections between customers needing waste collection and aboboyaa drivers ready to provide the service.

## Features

### For Customers 👥

1. **User Registration & Login**
   - Phone number / Email / Google Sign-in
   - Basic profile (Name, Location, Contact)

2. **Request Pickup**
   - Enter pickup location (GPS or manual input)
   - Select type of waste (household, plastic, bulky items, e-waste, garden waste, mixed)
   - Add quantity (bags, bins, weight estimate)
   - Schedule: immediate or later date & time
   - Payment options (cash, Mobile Money, card, subscription)

3. **Live Tracking**
   - Track assigned aboboyaa driver in real-time
   - Estimated arrival time
   - Driver information and contact

4. **Notifications**
   - SMS/Push notifications for:
     - Pickup confirmation
     - Driver assigned
     - Driver on the way
     - Pickup completed

5. **Pickup History**
   - View past pickup requests
   - Digital receipts
   - Payment history

### For Drivers (Aboboyaa Owners) 🚛

1. **Driver Dashboard**
   - View daily/weekly/monthly statistics
   - Current earnings
   - Rating overview
   - Active job status

2. **Accept Pickup Requests**
   - Browse available pickup requests
   - Filter by distance and payment
   - Accept or decline requests
   - View customer details

3. **Navigation**
   - GPS navigation to customer location
   - Customer contact information
   - Job details and requirements

4. **Earnings Dashboard**
   - Track daily, weekly, and monthly earnings
   - Payment breakdown (Cash, Mobile Money, Card)
   - Withdrawal options
   - Earning history

5. **Job History**
   - Complete history of all jobs
   - Customer ratings received
   - Payment records

## Technology Stack

- **Framework**: React Native
- **Navigation**: React Navigation
- **State Management**: React Context API
- **Authentication**: Firebase Authentication (planned)
- **Database**: Firebase Firestore (planned)
- **Maps**: React Native Maps
- **Location**: React Native Geolocation Service
- **Notifications**: Firebase Cloud Messaging & React Native Push Notification
- **Payment Integration**: 
  - Mobile Money (MTN, Vodafone, AirtelTigo) - planned
  - Card payments (Paystack/Flutterwave) - planned

## Project Structure

```
BorlaBoy/
├── src/
│   ├── screens/          # Screen components
│   │   ├── auth/         # Authentication screens
│   │   ├── customer/     # Customer-facing screens
│   │   └── driver/       # Driver-facing screens
│   ├── navigation/       # Navigation configuration
│   ├── context/          # Context providers
│   ├── services/         # Business logic services
│   ├── models/           # Data models
│   ├── components/       # Reusable UI components
│   └── utils/            # Utility functions
├── App.js                # Main application entry
├── index.js              # React Native entry point
└── package.json          # Dependencies
```

## Getting Started

### Prerequisites

- Node.js >= 18
- React Native development environment
- iOS: Xcode (for iOS development)
- Android: Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/McAnnison/BorlaBoy.git
cd BorlaBoy
```

2. Install dependencies:
```bash
npm install
```

3. iOS specific setup:
```bash
cd ios && pod install && cd ..
```

### Running the App

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

**Start Metro Bundler:**
```bash
npm start
```

### Development

**Run linter:**
```bash
npm run lint
```

**Run tests:**
```bash
npm test
```

## Payment Methods

The app supports multiple payment methods popular in Ghana:

- **Cash**: Pay on delivery
- **Mobile Money (MoMo)**: MTN Mobile Money, Vodafone Cash, AirtelTigo Money
- **Card**: Credit/Debit card payments
- **Subscription**: Monthly/weekly subscription plans

## Future Enhancements

- [ ] Backend API integration with Firebase
- [ ] Real-time driver tracking with GPS
- [ ] In-app chat between customers and drivers
- [ ] Rating and review system
- [ ] Referral program
- [ ] Recycling rewards program
- [ ] Multi-language support (English, Twi, Ga, Ewe)
- [ ] Admin dashboard for monitoring
- [ ] Analytics and reporting
- [ ] Scheduled recurring pickups
- [ ] Corporate/Business accounts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the development team.

---

**Making Ghana Cleaner, One Pickup at a Time! 🇬🇭♻️**
