import { Routes, Route } from 'react-router-dom';
import Admin from '../pages/Admin';
import CreateProduct from '../pages/CreateProduct';
import EditProduct from '../pages/EditProduct';
import DeleteProduct from '../pages/DeleteProduct';
import { useAuth } from '../contexts/AuthContext';
import SkeletonPage from '../components/Loader/SkeletonPage';
import { useEffect } from 'react';

const AdminRoutes = () => {
  const { isCheckingAuth, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <SkeletonPage />;
  return (
    <Routes>
      <Route index element={<Admin />} />
      <Route path="product/create" element={<CreateProduct />} />
      <Route path="product/edit/:id" element={<EditProduct />} />
      <Route path="product/delete/:id" element={<DeleteProduct />} />
    </Routes>
  );
};

export default AdminRoutes;
