/**
 * Location Service
 * Handles GPS location tracking
 */

export const getCurrentLocation = async () => {
  // TODO: Implement GPS location fetching
  return {
    latitude: 5.6037,
    longitude: -0.1870,
    address: 'Accra, Ghana',
  };
};

export const watchLocation = (callback) => {
  // TODO: Implement real-time location tracking
  const watchId = setInterval(() => {
    callback({
      latitude: 5.6037,
      longitude: -0.1870,
    });
  }, 5000);

  return watchId;
};

export const clearLocationWatch = (watchId) => {
  clearInterval(watchId);
};

export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  // Haversine formula to calculate distance in km
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
