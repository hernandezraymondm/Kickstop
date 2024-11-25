import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr]">
      <header id="featured" className="col-span-2">
        {isAdminRoute ? <AdminNavbar /> : <Navbar />}
      </header>

      {!isAdminRoute && (
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>
      )}

      <main className="col-span-2 lg:col-span-1">
        <Outlet />
      </main>

      {!isAdminRoute && <footer className="col-span-2">{<Footer />}</footer>}
    </div>
  );
};

export default Layout;
