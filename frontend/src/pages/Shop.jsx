import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const targetFromUrl = queryParams.get('target');

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [target, setTarget] = useState({
    men: targetFromUrl === 'men',
    women: targetFromUrl === 'women',
    kids: targetFromUrl === 'kids',
  });
  const [stars, setStars] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [minPrice, setMinPrice] = useState(0.01);
  const [maxPrice, setMaxPrice] = useState(100.0); // Adjusted to pesos
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product`)
      .then((response) => {
        const products = response.data.data;
        setProduct(products);
        setFilteredProducts(products);
        const maxProductPrice =
          Math.max(...products.map((p) => p.priceInCents)) / 100;
        setMaxPrice(maxProductPrice);
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

    const targetKeys = Object.keys(target).filter((key) => target[key]);
    if (targetKeys.length > 0) {
      filtered = filtered.filter((product) =>
        targetKeys.some((key) => product.target.toLowerCase() === key)
      );
    }

    const starKeys = Object.keys(stars).filter((key) => stars[key]);
    if (starKeys.length > 0) {
      filtered = filtered.filter((product) =>
        starKeys.some(
          (key) => product.rating && product.rating >= parseInt(key)
        )
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.priceInCents >= minPrice * 100 &&
        product.priceInCents <= maxPrice * 100
    );

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [product, category, target, stars, minPrice, maxPrice]);

  const handleTargetChange = (e) => {
    setTarget({
      ...target,
      [e.target.name]: e.target.checked,
    });
  };

  const handleStarsChange = (e) => {
    setStars({
      ...stars,
      [e.target.name]: e.target.checked,
    });
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(parseFloat(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseFloat(e.target.value));
  };

  return (
    <div className="p-4 max-w-[1650px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-16">
      {/* Sidebar Filters */}
      <div className="filters min-w-40 md:block gap-x-10 gap-y-4 col-span-1 grid grid-cols-2 md:space-y-4 pr-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold text-accent-content">
              Price Range
            </span>
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              name="minPrice"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="input input-xs input-bordered w-full"
              min="0"
              max={maxPrice}
              step="0.01"
            />
            <span className="text-accent-content">-</span>
            <input
              type="text"
              name="maxPrice"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="input input-xs input-bordered w-full"
              min={minPrice}
              step="0.01"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold text-accent-content">
              Category
            </span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-xs select-bordered w-full"
          >
            <option value="">All</option>
            <option value="Featured">Featured</option>
            <option value="Sports">Sports</option>
            <option value="Collection">Collection</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold text-accent-content">
              Target
            </span>
          </label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="men"
                checked={target.men}
                onChange={handleTargetChange}
                className="checkbox checkbox-sm"
              />
              <span className="text-accent-content">Men</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="women"
                checked={target.women}
                onChange={handleTargetChange}
                className="checkbox checkbox-sm"
              />
              <span className="text-accent-content">Women</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="kids"
                checked={target.kids}
                onChange={handleTargetChange}
                className="checkbox checkbox-sm"
              />
              <span className="text-accent-content">Kids</span>
            </label>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold text-accent-content">
              Rating
            </span>
          </label>
          <div className="flex flex-col space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <label key={star} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={star.toString()}
                  checked={stars[star]}
                  onChange={handleStarsChange}
                  className="checkbox checkbox-sm"
                />
                <span className="text-accent-content rating rating-xs lg:rating-sm">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      className={`mask mask-star-2 inline-block w-4 h-4 ${
                        i < star ? 'bg-secondary' : 'bg-gray-300'
                      }`}
                    ></input>
                  ))}
                </span>
              </label>
            ))}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="noReviews"
                checked={stars['noReviews']}
                onChange={handleStarsChange}
                className="checkbox checkbox-sm"
              />
              <span className="text-accent-content">No Reviews</span>
            </label>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="col-span-4">
        <ProductCard product={filteredProducts} loading={loading} cards={24} />
      </div>
    </div>
  );
};

export default Shop;
