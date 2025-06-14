const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/', verifyToken, async (req, res) => {
  const booking = new Booking({ ...req.body, userId: req.user.id });
  await booking.save();
  res.send('Table Booked');
});

router.delete('/:id', verifyToken, async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.send('Booking Cancelled');
});

router.put('/:id', verifyToken, async (req, res) => {
  const updatedBooking = await Booking.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(updatedBooking);
});

router.get('/', verifyToken, async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

module.exports = router;
