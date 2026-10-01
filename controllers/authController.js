// controllers/authController.js
const User = require('../models/User');

// Đăng ký tài khoản
exports.register = (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "Vui lòng nhập đủ thông tin!" });
  }

  const existingUser = User.findByEmail(email);
  if (existingUser) {
    return res.status(400).json({ success: false, message: "Email này đã được sử dụng!" });
  }

  const newUser = User.create({ name, email, password, role });
  res.status(201).json({
    success: true,
    message: "Đăng ký thành công!",
    data: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role }
  });
};

// Đăng nhập
exports.login = (req, res) => {
  const { email, password } = req.body;

  const user = User.findByEmail(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ success: false, message: "Email hoặc mật khẩu không chính xác!" });
  }

  // Giả lập cấp Token JWT cho Client/Staff/Admin
  const token = `fake-jwt-token-for-${user.role.toLowerCase()}-${user.id}`;

  res.status(200).json({
    success: true,
    message: "Đăng nhập thành công!",
    token: token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role }
  });
};