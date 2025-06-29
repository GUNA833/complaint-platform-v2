const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  complaint: String,
  description: String,
  status: { type: String, default: 'Pending' },
  assignedTo: { type: String, default: '' }
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
