import React from 'react';

function BookingForm() {
  return (
    <div>
      <h2>Book a Table</h2>
      <form>
        <input type="text" placeholder="Name" /><br />
        <input type="datetime-local" /><br />
        <input type="number" placeholder="Guests" /><br />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;