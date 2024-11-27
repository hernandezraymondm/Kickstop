import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isHome = location.pathname === '/';

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(isHome);
  }, [isHome]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr]">
      <header id="featured" className="col-span-2">
        {isAdminRoute ? (
          <AdminNavbar />
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
