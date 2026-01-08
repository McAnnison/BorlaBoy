# Quick Start Guide - BorlaBoy

## For Developers

### Prerequisites
- Node.js 18+
- npm or yarn
- React Native development environment

### Installation

1. **Clone and Install**
```bash
git clone https://github.com/McAnnison/BorlaBoy.git
cd BorlaBoy
npm install
```

2. **iOS Setup** (macOS only)
```bash
cd ios
pod install
cd ..
npm run ios
```

3. **Android Setup**
```bash
npm run android
```

### Project Structure at a Glance

```
BorlaBoy/
├── src/
│   ├── screens/auth/          # Login, SignUp, UserType
│   ├── screens/customer/      # 5 customer screens
│   ├── screens/driver/        # 5 driver screens
│   ├── navigation/            # 4 navigators
│   ├── context/               # AuthContext
│   ├── services/              # Notification, Location, Payment
│   └── models/                # User, PickupRequest
├── App.js                     # Main entry point
└── package.json               # Dependencies
```

## For Customers

### How to Use BorlaBoy

1. **Sign Up**
   - Choose "I need waste pickup"
   - Create account with email/phone
   - Complete your profile

2. **Request Pickup**
   - Tap "Request Pickup"
   - Enter your location
   - Select waste type (household, plastic, etc.)
   - Choose quantity
   - Pick schedule (now or later)
   - Select payment method (Cash, MoMo, Card)

3. **Track Your Driver**
   - View driver location in real-time
   - See estimated arrival time
   - Call driver if needed

4. **View History**
   - Check past pickups
   - Download receipts
   - Track spending

## For Drivers (Aboboyaa Owners)

### How to Earn with BorlaBoy

1. **Sign Up**
   - Choose "I'm an Aboboyaa driver"
   - Create driver account
   - Complete vehicle details

2. **Accept Requests**
   - Browse available pickups
   - See distance and payment
   - Accept jobs that work for you

3. **Complete Jobs**
   - Navigate to customer
   - Collect waste
   - Confirm completion
   - Get paid

4. **Track Earnings**
   - View daily/weekly/monthly earnings
   - See payment breakdown
   - Withdraw earnings

## Payment Methods Supported

- **Cash**: Pay driver directly
- **Mobile Money**: MTN, Vodafone, AirtelTigo
- **Card**: Credit/Debit cards
- **Subscription**: Monthly plans

## Support

For help or issues:
- Check DEVELOPMENT.md for technical details
- Review API.md for backend integration
- See FEATURES.md for complete feature list

---

**Making Ghana Cleaner! 🇬🇭♻️**
