// models/Vehicle.js
// Giả lập danh sách xe trong bộ nhớ 
let vehicles = [
  { id: 1, name: "Honda Wave Alpha", type: "Xăng", daily_price: 150000, status: "Sẵn sàng" },
  { id: 2, name: "VinFast Feliz S", type: "Điện", daily_price: 200000, status: "Sẵn sàng" }
];

module.exports = {
  getAll: () => vehicles,
  getById: (id) => vehicles.find(v => v.id === parseInt(id)),
  create: (data) => {
    const newVehicle = { id: vehicles.length + 1, ...data };
    vehicles.push(newVehicle);
    return newVehicle;
  }
};