// routes/vehicleRoutes.js
const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// GET /api/vehicles - Xem danh sách xe
router.get('/', vehicleController.getVehicles);

// POST /api/vehicles - Thêm xe mới
router.post('/', vehicleController.createVehicle);

module.exports = router;