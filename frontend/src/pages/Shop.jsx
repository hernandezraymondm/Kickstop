import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [target, setTarget] = useState({
    men: false,
    women: false,
    kids: false,
  });
  const [stars, setStars] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);
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
        product.priceInCents >= minPrice && product.priceInCents <= maxPrice
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
    setMinPrice(parseInt(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };

  return (
    <div className="p-4 max-w-[1450px] mx-auto mt-16">
      <div className="filters flex flex-col md:flex-row md:items-start justify-center mb-6 space-y-4 md:space-y-0 md:space-x-6">
        <div className="form-control mb-4 md:mb-0">
          <label className="label">
            <span className="label-text text-lg font-semibold text-gray-700">
              Category
            </span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-xs select-bordered w-48 max-w-xs"
          >
            <option value="">All</option>
            <option value="Featured">Featured</option>
            <option value="Sports">Sports</option>
            <option value="Collection">Collection</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold text-gray-700">
              Target
            </span>
          </label>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="men"
                checked={target.men}
                onChange={handleTargetChange}
                className="checkbox checkbox-sm"
              />
              <span className="text-gray-700">Men</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="women"
                checked={target.women}
                onChange={handleTargetChange}
                className="checkbox checkbox-sm"
              />
              <span className="text-gray-700">Women</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="kids"
                checked={target.kids}
                onChange={handleTargetChange}
                className="checkbox checkbox-sm"
              />
              <span className="text-gray-700">Kids</span>
            </label>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold text-gray-700">
              Rating
            </span>
          </label>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={star.toString()}
                  checked={stars[star]}
                  onChange={handleStarsChange}
                  className="checkbox checkbox-sm"
                />
                <span className="text-gray-700">
                  {[...Array(star)].map((_, i) => (
                    <i
                      key={i}
                      className="mask mask-star-2 bg-yellow-500 inline-block w-4 h-4"
                    ></i>
                  ))}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold text-gray-700">
              Price Range
            </span>
          </label>
          <input
            type="range"
            min={minPrice}
            max="10000"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="range range-xs range-primary w-48 mb-2"
          />
          <div className="flex items-center space-x-3">
            <input
              type="number"
              name="minPrice"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="input input-xs input-bordered w-20"
              min="0"
              max={maxPrice}
            />
            <span className="text-gray-700">-</span>
            <input
              type="number"
              name="maxPrice"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="input input-xs input-bordered w-20"
              min={minPrice}
            />
          </div>
        </div>
      </div>
      <ProductCard product={filteredProducts} loading={loading} cards={24} />
    </div>
  );
};

export default Shop;
