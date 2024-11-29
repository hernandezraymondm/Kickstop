import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product`)
      .then((response) => {
        setProduct(response.data.data);
        setFilteredProducts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filterProducts = () => {
    if (!Array.isArray(product)) {
      console.error('Products is not an array:', product);
      return;
    }

    let filtered = [...product];

    if (category !== '') {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [product, category]);

  return (
    <div className="p-4 max-w-[1450px] mx-auto mt-16">
      <div className="filters flex justify-end mb-6">
        <div className="form-control max-w-[1450px]">
          <label className="label">
            <span className="label-text">Category</span>
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="">All</option>
            <option value="Featured">Featured</option>
            <option value="Sports">Sports</option>
            <option value="Collection">Collection</option>
          </select>
        </div>
      </div>
      <ProductCard product={filteredProducts} loading={loading} cards={24} />
    </div>
  );
};

export default Shop;
