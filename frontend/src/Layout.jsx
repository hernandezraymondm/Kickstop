import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isHome = location.pathname === '/';

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(isHome);
  }, [isHome]);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr] overflow-clip">
      <header className="max-h-16 col-span-2 z-20 sticky top-0 backdrop-blur-lg shadow-sm lg:px-2 xl:px-[60px] ">
        <Navbar />
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
