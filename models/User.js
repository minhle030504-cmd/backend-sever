// models/User.js
let users = [
  { id: 1, name: "Nguyen Van A", email: "client@gmail.com", password: "123", role: "Client" },
  { id: 2, name: "Tran Van B", email: "staff@gmail.com", password: "123", role: "Staff" },
  { id: 3, name: "Admin System", email: "admin@gmail.com", password: "123", role: "Admin" }
];

module.exports = {
  findByEmail: (email) => users.find(u => u.email === email),
  create: (userData) => {
    const newUser = {
      id: users.length + 1,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: userData.role || "Client"
    };
    users.push(newUser);
    return newUser;
  }
};