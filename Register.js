import React from 'react';

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" /><br />
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;