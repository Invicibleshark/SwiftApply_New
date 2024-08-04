import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
        <div className='navbar'>
        <div className='nav_left'>
         <li><Link to="/">Swift Apply</Link></li>
         </div>
          <div className='nav_right'>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          </div>
        </div>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
