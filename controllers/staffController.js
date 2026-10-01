// controllers/staffController.js
const Booking = require('../models/Booking');

// 1. Xử lý Giao xe cho khách (Handover)
exports.handoverVehicle = (req, res) => {
  const { bookingId, odometer, vehicleCondition } = req.body;

  if (!bookingId || !odometer) {
    return res.status(400).json({ 
      success: false, 
      message: "Vui lòng nhập ID đơn hàng và số km (odometer) lúc giao!" 
    });
  }

  res.status(200).json({
    success: true,
    message: "Giao xe thành công!",
    data: {
      bookingId,
      status: "Đã giao xe",
      startOdometer: odometer,
      condition: vehicleCondition || "Xe bình thường, không trầy xước",
      handoverTime: new Date().toISOString()
    }
  });
};

// 2. Xử lý Nhận xe trả & Tính phụ thu (Return & Surcharge)
exports.returnVehicle = (req, res) => {
  const { bookingId, returnOdometer, isLate, lateHours, damageFee } = req.body;

  if (!bookingId || !returnOdometer) {
    return res.status(400).json({ 
      success: false, 
      message: "Vui lòng nhập ID đơn hàng và số km lúc nhận lại xe!" 
    });
  }

  // Logic tính phụ thu
  let surcharge = 0;
  if (isLate && lateHours) {
    surcharge += lateHours * 50000; // Phụ thu trễ giờ: 50k/giờ
  }
  if (damageFee) {
    surcharge += Number(damageFee); // Phụ thu hư hại/vệ sinh
  }

  res.status(200).json({
    success: true,
    message: "Nhận lại xe thành công!",
    data: {
      bookingId,
      status: "Hoàn tất hợp đồng",
      returnOdometer,
      surcharge: surcharge,
      surchargeDetail: `Trễ hạn: ${lateHours || 0}h, Phí hư hại/khác: ${damageFee || 0} VNĐ`,
      returnTime: new Date().toISOString()
    }
  });
};