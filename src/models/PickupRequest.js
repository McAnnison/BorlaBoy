/**
 * Pickup Request Model
 */

export class PickupRequest {
  constructor(data) {
    this.id = data.id || Date.now().toString();
    this.customerId = data.customerId;
    this.customerName = data.customerName;
    this.location = data.location;
    this.coordinates = data.coordinates;
    this.wasteType = data.wasteType;
    this.quantity = data.quantity;
    this.scheduleType = data.scheduleType; // 'immediate' or 'later'
    this.scheduledDate = data.scheduledDate;
    this.paymentMethod = data.paymentMethod;
    this.amount = data.amount;
    this.notes = data.notes;
    this.status = data.status || 'pending'; // pending, accepted, in_progress, completed, cancelled
    this.driverId = data.driverId;
    this.driverName = data.driverName;
    this.createdAt = data.createdAt || new Date().toISOString();
    this.updatedAt = data.updatedAt || new Date().toISOString();
  }

  toJSON() {
    return {
      id: this.id,
      customerId: this.customerId,
      customerName: this.customerName,
      location: this.location,
      coordinates: this.coordinates,
      wasteType: this.wasteType,
      quantity: this.quantity,
      scheduleType: this.scheduleType,
      scheduledDate: this.scheduledDate,
      paymentMethod: this.paymentMethod,
      amount: this.amount,
      notes: this.notes,
      status: this.status,
      driverId: this.driverId,
      driverName: this.driverName,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
