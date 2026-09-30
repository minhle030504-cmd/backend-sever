const express = require('express');
const app = express();
const PORT = 5000;

// Middleware đọc dữ liệu JSON từ request
app.use(express.json());

// Nhập router từ thư mục routes
const vehicleRoutes = require('./routes/vehicleRoutes');

// Khai báo các đường dẫn API
app.use('/api/vehicles', vehicleRoutes);

// Endpoint kiểm tra Server
app.get('/', (req, res) => {
  res.send('API Server is running...');
});

app.listen(PORT, () => {
  console.log(`Server Backend running on http://localhost:${PORT}`);
});