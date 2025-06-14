const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

router.get('/dashboard', verifyToken, isAdmin, async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

module.exports = router;
