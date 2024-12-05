import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import AdminNavbar from './components/Navbar/AdminNavbar';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isHome = location.pathname === '/';
  const token = localStorage.getItem('token');

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(isHome);
  }, [isHome]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr] overflow-x-clip">
      <header className="col-span-2 z-20 w-screen">
        {token ? (
          <AdminNavbar toggleSidebar={toggleSidebar} />
        ) : (
          <Navbar toggleSidebar={toggleSidebar} />
        )}
      </header>

      {isHome && (
        <aside className="hidden md:block">
          <Sidebar isOpen={isOpen} />
        </aside>
      )}

      <main
        className={`col-span-2 ${isHome ? 'lg:col-span-1' : 'lg:col-span-2'}`}
      >
        <Outlet />
      </main>

      {!isAdminRoute && (
        <footer className="col-span-2">
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default Layout;
