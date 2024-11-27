import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';

const AdminNavbar = () => {
  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
    <div className="navbar max-w-[1200px] mx-auto">
      <div className="navbar-center flex">
        <Link to={'/'} onClick={logout} className="btn">
          Logout
        </Link>
      </div>

      <div className="navbar-end gap-12">
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default AdminNavbar;
