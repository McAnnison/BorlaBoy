# BorlaBoy - Development Guide

## Setup Instructions

### 1. Environment Setup

Make sure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- React Native CLI
- Xcode (for iOS development on macOS)
- Android Studio (for Android development)

### 2. Install Dependencies

```bash
npm install
```

### 3. iOS Setup

```bash
cd ios
pod install
cd ..
```

### 4. Android Setup

Make sure you have Android SDK installed and configured. Update `local.properties` in `android/` directory with your SDK path.

## Running the Application

### Development Mode

**Start Metro Bundler:**
```bash
npm start
```

**Run on iOS:**
```bash
npm run ios
```

**Run on Android:**
```bash
npm run android
```

## Project Architecture

### Authentication Flow
1. User selects account type (Customer/Driver)
2. Login or Sign up
3. Navigate to respective dashboard

### Customer Flow
1. View home dashboard
2. Request pickup (select location, waste type, quantity, schedule, payment)
3. Track driver in real-time
4. View history and receipts

### Driver Flow
1. View dashboard with stats
2. Browse and accept pickup requests
3. Navigate to customer location
4. Complete pickup
5. View earnings and job history

## Key Components

### Context Providers
- **AuthContext**: Manages authentication state and user information

### Services
- **NotificationService**: Push notifications
- **LocationService**: GPS tracking and location services
- **PaymentService**: Payment processing

### Models
- **User**: User data model
- **PickupRequest**: Pickup request data model

## Testing

Run tests with:
```bash
npm test
```

## Code Style

This project uses ESLint and Prettier for code formatting:
```bash
npm run lint
```

## TODO List

- [ ] Implement Firebase backend integration
- [ ] Add real GPS tracking with React Native Maps
- [ ] Integrate Mobile Money payment gateway
- [ ] Add push notification support
- [ ] Implement Google Sign-In
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Implement offline mode with local storage
- [ ] Add image upload for waste verification

## Deployment

### iOS Deployment
1. Update version in `ios/BorlaBoy/Info.plist`
2. Build for release
3. Submit to App Store

### Android Deployment
1. Update version in `android/app/build.gradle`
2. Generate signed APK/AAB
3. Submit to Google Play Store
