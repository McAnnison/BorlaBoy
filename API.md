# API Documentation

## Overview

This document outlines the planned API endpoints for the BorlaBoy backend service.

## Base URL
```
https://api.borlaboy.com/v1
```

## Authentication

All authenticated endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### POST /auth/register
Register a new user (customer or driver)

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+233241234567",
  "password": "secure_password",
  "userType": "customer",
  "location": "Accra, Ghana"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user123",
    "name": "John Doe",
    "email": "john@example.com",
    "userType": "customer"
  },
  "token": "jwt_token_here"
}
```

#### POST /auth/login
Login existing user

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "secure_password"
}
```

**Response:**
```json
{
  "success": true,
  "user": {...},
  "token": "jwt_token_here"
}
```

### Pickup Requests

#### POST /pickups
Create a new pickup request

**Request Body:**
```json
{
  "location": "Adenta Housing Down",
  "coordinates": {
    "latitude": 5.6037,
    "longitude": -0.1870
  },
  "wasteType": "household",
  "quantity": "3 bags",
  "scheduleType": "immediate",
  "paymentMethod": "momo",
  "notes": "Gate code: 1234"
}
```

**Response:**
```json
{
  "success": true,
  "pickup": {
    "id": "pickup123",
    "status": "pending",
    "createdAt": "2026-01-08T12:00:00Z"
  }
}
```

#### GET /pickups
Get user's pickup history

**Response:**
```json
{
  "success": true,
  "pickups": [
    {
      "id": "pickup123",
      "location": "Adenta Housing Down",
      "wasteType": "household",
      "status": "completed",
      "amount": "₵25.00",
      "createdAt": "2026-01-08T12:00:00Z"
    }
  ]
}
```

#### GET /pickups/:id
Get specific pickup details

**Response:**
```json
{
  "success": true,
  "pickup": {
    "id": "pickup123",
    "customerId": "user123",
    "driverId": "driver456",
    "location": "Adenta Housing Down",
    "wasteType": "household",
    "status": "in_progress",
    "driverLocation": {
      "latitude": 5.6037,
      "longitude": -0.1870
    }
  }
}
```

### Driver Operations

#### GET /driver/requests
Get available pickup requests for drivers

**Response:**
```json
{
  "success": true,
  "requests": [
    {
      "id": "pickup123",
      "customerName": "John Doe",
      "location": "Adenta Housing Down",
      "wasteType": "household",
      "distance": "2.5 km",
      "payment": "₵25"
    }
  ]
}
```

#### POST /driver/accept/:pickupId
Accept a pickup request

**Response:**
```json
{
  "success": true,
  "pickup": {
    "id": "pickup123",
    "status": "accepted",
    "driverId": "driver456"
  }
}
```

#### PUT /driver/location
Update driver's current location

**Request Body:**
```json
{
  "latitude": 5.6037,
  "longitude": -0.1870
}
```

#### GET /driver/earnings
Get driver earnings

**Query Parameters:**
- period: "today" | "week" | "month"

**Response:**
```json
{
  "success": true,
  "earnings": {
    "total": "₵480",
    "jobs": 12,
    "breakdown": {
      "cash": "₵200",
      "momo": "₵180",
      "card": "₵100"
    }
  }
}
```

### Payments

#### POST /payments/process
Process a payment

**Request Body:**
```json
{
  "pickupId": "pickup123",
  "amount": "25.00",
  "method": "momo",
  "details": {
    "phoneNumber": "+233241234567"
  }
}
```

**Response:**
```json
{
  "success": true,
  "transactionId": "txn789",
  "status": "completed"
}
```

### Notifications

#### POST /notifications/send
Send notification to user

**Request Body:**
```json
{
  "userId": "user123",
  "title": "Driver Assigned",
  "body": "Your driver is on the way",
  "type": "pickup_update"
}
```

## Error Responses

All endpoints may return error responses in the following format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message"
  }
}
```

## Status Codes

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error
