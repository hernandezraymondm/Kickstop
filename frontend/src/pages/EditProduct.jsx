import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingDots from '../components/Loader/LoadingDots';

const EditProduct = () => {
  const [name, setName] = useState('');
  const [priceInPesos, setPriceInPesos] = useState(''); // Updated state
  const [category, setCategory] = useState('');
  const [target, setTarget] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const token = localStorage.getItem('NotAToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product/${id}`)
      .then((response) => {
        setLoading(false);
        setName(response.data.name);
        setPriceInPesos((response.data.priceInCents / 100).toFixed(2)); // Convert cents to pesos
        setCategory(response.data.category);
        setTarget(response.data.target);
        setDescription(response.data.description);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('An error happened. Check console');
      });
  }, [id]);

  const handleEditProduct = () => {
    const priceInCents = Math.round(parseFloat(priceInPesos) * 100); // Convert pesos to cents
    const data = { name, priceInCents, category, target, description };
    setLoading(true);
    axios
      .put(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product/${id}`,
        data,
        config
      )
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Product edited successfully', { variant: 'success' });
        navigate('/admin');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(error.response?.data?.message || error.message, {
          variant: 'error',
        });
        console.log(error);
      });
  };

  return (
    <div className="p-6 bg-base-100 flex justify-center items-center">
      <div className="container max-w-lg shadow-lg rounded-lg p-5 bg-base-100">
        <Link
          to="/admin"
          className="flex justify-center items-center btn mb-4 w-12 py-2 px-8 text-sm rounded-xl"
        >
          Back
        </Link>
        <div className="flex justify-start items-center gap-3">
          <h1 className="text-3xl font-semibold my-4 ">Edit Product</h1>
          {loading && (
            <span className="loading loading-spinner text-secondary" />
          )}
        </div>
        <div className="my-4">
          <label htmlFor="name" className="block text-lg mb-2 mt-4">
            Name
          </label>
          <input
            id="name"
            disabled={loading}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered input-accent w-full px-4 py-2"
          />

          <label htmlFor="priceInPesos" className="block text-lg mb-2 mt-4">
            Price (₱)
          </label>
          <input
            id="priceInPesos"
            disabled={loading}
            type="text"
            value={priceInPesos}
            onChange={(e) => setPriceInPesos(e.target.value)}
            className="input input-bordered input-accent w-full px-4 py-2"
            step="0.01"
          />

          <label htmlFor="category" className="block text-lg mb-2 mt-4">
            Category
          </label>
          <select
            id="category"
            disabled={loading}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-accent w-full px-4 py-2"
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Featured">Featured</option>
            <option value="Sports">Sports</option>
            <option value="Collection">Collection</option>
          </select>

          <label htmlFor="target" className="block text-lg mb-2 mt-4">
            Target
          </label>
          <select
            id="target"
            disabled={loading}
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="select select-accent w-full px-4 py-2"
            required
          >
            <option value="" disabled>
              Select target
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>

          <label htmlFor="description" className="block text-lg mb-2 mt-4">
            Description
          </label>
          <textarea
            id="description"
            disabled={loading}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-accent w-full px-4 py-2"
          />

          <button
            onClick={handleEditProduct}
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded-md mt-4"
          >
            {loading && name ? (
              <div className="flex justify-center items-center gap-2">
                <p>Saving Changes</p>
                <LoadingDots size={'loading-xs'} />
              </div>
            ) : (
              'Save Changes'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
