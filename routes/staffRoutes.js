// routes/staffRoutes.js
const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

// POST /api/staff/handover - Nhân viên bàn giao xe
router.post('/handover', staffController.handoverVehicle);

// POST /api/staff/return - Nhân viên nhận lại xe & tính phụ thu
router.post('/return', staffController.returnVehicle);

module.exports = router;