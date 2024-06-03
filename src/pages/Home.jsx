import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <nav>
        <Link to="/login" target='_blank'>Login</Link>
        <br />
        <Link to="/register" target='_blank'>Signup</Link>
      </nav>
    </div>
  );
}

export default Home;


