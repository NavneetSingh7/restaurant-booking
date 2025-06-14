import React from 'react';

function EditBooking() {
  return (
    <div>
      <h2>Edit Booking</h2>
      <form>
        <input type="text" placeholder="Updated Name" /><br />
        <input type="datetime-local" /><br />
        <input type="number" placeholder="Guests" /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditBooking;