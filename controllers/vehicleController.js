// controllers/vehicleController.js
const Vehicle = require('../models/Vehicle');

// Lấy danh sách toàn bộ xe
exports.getVehicles = (req, res) => {
  const list = Vehicle.getAll();
  res.status(200).json({ success: true, data: list });
};

// Thêm xe mới (Nghiệp vụ CRUD Admin)
exports.createVehicle = (req, res) => {
  const { name, type, daily_price, status } = req.body;
  
  if (!name || !type || !daily_price) {
    return res.status(400).json({ success: false, message: "Vui lòng nhập đủ thông tin xe!" });
  }

  const newVehicle = Vehicle.create({ name, type, daily_price, status: status || "Sẵn sàng" });
  res.status(201).json({ success: true, message: "Thêm xe thành công!", data: newVehicle });
};