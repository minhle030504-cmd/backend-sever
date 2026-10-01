const express = require('express');
const app = express();
const PORT = 5000;

// Middleware đọc dữ liệu JSON từ request
app.use(express.json());

// Nhập router từ thư mục routes
const vehicleRoutes = require('./routes/vehicleRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const authRoutes = require('./routes/authRoutes');
const staffRoutes = require('./routes/staffRoutes');
// Khai báo các đường dẫn API
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/staff', staffRoutes);
// Endpoint kiểm tra Server
app.get('/', (req, res) => {
  res.send('API Server is running...');
});

app.listen(PORT, () => {
  console.log(`Server Backend running on http://localhost:${PORT}`);
});