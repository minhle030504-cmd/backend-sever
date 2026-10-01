// models/Booking.js
let bookings = [];

module.exports = {
  getAll: () => bookings,
  create: (bookingData) => {
    const newBooking = {
      id: bookings.length + 1,
      customerName: bookingData.customerName,
      vehicleId: bookingData.vehicleId,
      startDate: bookingData.startDate,
      endDate: bookingData.endDate,
      totalPrice: bookingData.totalPrice,
      status: 'Đã đặt'
    };
    bookings.push(newBooking);
    return newBooking;
  }
};