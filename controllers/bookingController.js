// controllers/bookingController.js
const Booking = require('../models/Booking');

// Lấy danh sách các đơn đặt xe
exports.getBookings = (req, res) => {
  const list = Booking.getAll();
  res.status(200).json({ success: true, data: list });
};

// Tạo đơn đặt xe mới
exports.createBooking = (req, res) => {
  const { customerName, vehicleId, startDate, endDate, totalPrice } = req.body;

  if (!customerName || !vehicleId || !startDate || !endDate) {
    return res.status(400).json({ 
      success: false, 
      message: "Vui lòng nhập đầy đủ thông tin đặt xe!" 
    });
  }

  const newBooking = Booking.create({
    customerName,
    vehicleId,
    startDate,
    endDate,
    totalPrice: totalPrice || 300000
  });

  res.status(201).json({ 
    success: true, 
    message: "Tạo đơn đặt xe thành công!", 
    data: newBooking 
  });
};