// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// GET /api/bookings - Lấy danh sách đơn đặt xe
router.get('/', bookingController.getBookings);

// POST /api/bookings - Tạo đơn đặt xe mới
router.post('/', bookingController.createBooking);

module.exports = router;