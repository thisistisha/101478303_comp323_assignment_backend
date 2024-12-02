const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String },
  position: { type: String },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
