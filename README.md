HỆ THỐNG QUẢN LÝ CHO THUÊ XE (BACKEND RESTFUL API)

>Dự án Agile Architecture - Sprint 1 & Sprint 2
>Kiến trúc: **3-Tier / MVC Pattern** | Công nghệ: **Node.js, Express.js, Git/GitHub**

CẤU TRÚC THƯ MỤC THIẾT KẾ (MVC ARCHITECTURE)

backend-sever/
├── config/           # Cấu hình môi trường & kết nối
├── controllers/      # Tầng xử lý logic nghiệp vụ
│   ├── authController.js      # Xử lý đăng ký, đăng nhập & phân quyền
│   ├── bookingController.js   # Xử lý tạo & xem đơn đặt xe
│   ├── staffController.js     # Xử lý giao/nhận xe & tính phụ thu
│   └── vehicleController.js   # Quản lý danh mục phương tiện
├── models/           # Tầng quản lý dữ liệu (Data Access)
│   ├── Booking.js
│   ├── User.js
│   └── Vehicle.js
├── routes/           # Tầng định tuyến API
│   ├── authRoutes.js
│   ├── bookingRoutes.js
│   ├── staffRoutes.js
│   └── vehicleRoutes.js
├── package.json
└── server.js         # Entry point chính của ứng dụng Backend