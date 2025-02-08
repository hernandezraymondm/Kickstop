import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ProtectedRoute from './routes/ProtectedRoutes';
import LikedItems from './pages/Liked';
import RegisterSuccess from './pages/RegisterSuccess';
import { useAuth } from './contexts/AuthContext';
import AdminRoutes from './routes/AdminRoutes';
import SkeletonPage from './components/Loader/SkeletonPage';

function App() {
  const { isCheckingAuth, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <SkeletonPage />;

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="liked" element={<LikedItems />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="register/success" element={<RegisterSuccess />} />
        <Route path="success" element={<Success />} />
        <Route path="cancel" element={<Cancel />} />

        {/* Protected Routes */}
        <Route
          path="admin/*"
          element={
            <ProtectedRoute>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* 404 Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
