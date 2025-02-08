import { Routes, Route } from 'react-router-dom';
import Admin from '../pages/Admin';
import CreateProduct from '../pages/CreateProduct';
import EditProduct from '../pages/EditProduct';
import DeleteProduct from '../pages/DeleteProduct';

const AdminRoutes = () => {
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
