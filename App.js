import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import BookingForm from './components/BookingForm';
import Dashboard from './components/Dashboard';
import EditBooking from './components/EditBooking';

function App() {
  return (
    <div className="container">
      <h1>Restaurant Table Booking</h1>
      <nav>
        <Link to="/">Login</Link> | 
        <Link to="/register">Register</Link> | 
        <Link to="/book">Book</Link> | 
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit" element={<EditBooking />} />
      </Routes>
    </div>
  );
}

export default App;