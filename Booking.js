const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  userId: String,
  date: String,
  time: String,
  tableNumber: Number,
  status: { type: String, default: 'booked' }
});
module.exports = mongoose.model('Booking', bookingSchema);
