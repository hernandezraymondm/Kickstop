import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/Card/ProductCard';

const Filters = ({
  category,
  setCategory,
  target,
  setTarget,
  stars,
  setStars,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
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
    <div className="filters min-w-40 md:block gap-x-10 gap-y-4 grid grid-cols-2 md:space-y-3 pr-4 shadow-lg rounded-xl p-5 bg-base-200">
      <div className="form-control col-span-2">
        <label className="label">
          <span className="label-text text-lg font-semibold text-accent-content whitespace-nowrap">
            Price Range, ₱
          </span>
        </label>
        <div className="flex items-center flex-wrap">
          <label className="label w-full">
            <span className="label-text text-accent-content mr-3">Min: </span>
            <input
              type="text"
              name="minPrice"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="input input-xs input-bordered w-full min-w-20"
              min="0"
              max={maxPrice}
            />
          </label>
          <label className="label w-full">
            <span className="label-text text-accent-content mr-3">Max: </span>
            <input
              type="text"
              name="maxPrice"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="input input-xs input-bordered w-full min-w-20"
              min={minPrice}
            />
          </label>
        </div>
      </div>

      <div className="divider hidden md:flex" />

      <div className="form-control col-span-2">
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

      <div className="divider hidden md:flex" />

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

      <div className="divider hidden md:flex " />

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
                    className={`mask mask-star-2 inline-block w-4 h-4 cursor-default ${
                      i < star ? 'bg-secondary' : 'bg-neutral-100'
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
  );
};

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const targetFromUrl = queryParams.get('target');
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
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100.0);
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
        console.log(
          error.response?.data?.message || 'Failed to fetch products.'
        );
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

  return (
    <div className="p-4 max-w-[1650px] mx-auto mt-11 grid grid-cols-1 md:grid-cols-8 lg:grid-cols-10 gap-y-6 md:gap-3 2xl:gap-10">
      {/* Sidebar Filters */}
      {/* Small Screen Filter*/}
      <div className="bg-base-200 collapse md:hidden">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-base-200 font-semibold peer-checked:bg-base-300 text-center">
          Show/Hide filters
        </div>
        <div className="collapse-content bg-base-200 peer-checked:bg-base-300">
          <Filters
            category={category}
            setCategory={setCategory}
            target={target}
            setTarget={setTarget}
            stars={stars}
            setStars={setStars}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
        </div>
      </div>
      {/* Large Screen Filter */}
      <div className="hidden md:inline-block col-span-2">
        <Filters
          category={category}
          setCategory={setCategory}
          target={target}
          setTarget={setTarget}
          stars={stars}
          setStars={setStars}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>
      {/* Product Cards */}
      <div className="col-span-6 lg:col-span-8">
        <ProductCard product={filteredProducts} loading={loading} cards={24} />
      </div>
    </div>
  );
};

export default Shop;
