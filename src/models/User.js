/**
 * User Model
 */

export class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.location = data.location;
    this.userType = data.userType; // 'customer' or 'driver'
    this.rating = data.rating || 0;
    this.totalJobs = data.totalJobs || 0;
    this.createdAt = data.createdAt || new Date().toISOString();
    
    // Driver-specific fields
    if (this.userType === 'driver') {
      this.vehicleNumber = data.vehicleNumber;
      this.vehicleType = data.vehicleType;
      this.totalEarnings = data.totalEarnings || 0;
      this.isOnline = data.isOnline || false;
    }
  }

  toJSON() {
    const baseData = {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      location: this.location,
      userType: this.userType,
      rating: this.rating,
      totalJobs: this.totalJobs,
      createdAt: this.createdAt,
    };

    if (this.userType === 'driver') {
      return {
        ...baseData,
        vehicleNumber: this.vehicleNumber,
        vehicleType: this.vehicleType,
        totalEarnings: this.totalEarnings,
        isOnline: this.isOnline,
      };
    }

    return baseData;
  }
}
