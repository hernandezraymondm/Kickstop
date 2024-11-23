import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import ArrowIcon from '../components/Icon/ArrowIcon';
import Rating from '../components/rating/Rating';
import CollectionCard from '../components/CollectionCard';

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product`)
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const latestProducts = product.slice(0, 9);

  return (
    <>
      <section
        className="section hero bg-cover bg-center p-20 mb-5 mx-auto font-nunito"
        style={{ backgroundImage: "url('/assets/images/hero-banner.png')" }}
      >
        <div className="hero-content relative mx-auto py-20 flex items-start flex-col w-full">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 block text-accent">
            Discover the Latest
            <strong className="block md:text-6xl">Shoes Collection</strong>
          </h1>
          <p className="text-lg md:text-xl max-w-[46ch] text-accent-content mb-4">
            Step into the season with our latest styles. Discover unparalleled
            comfort and trendsetting designs that take your footwear game to the
            next level. Elevate your wardrobe with the perfect blend of fashion
            and functionality, designed for the modern lifestyle.
          </p>
          <a
            href="/shop"
            className="btn btn-secondary inline-flex items-center space-x-2 text-white font-semibold"
          >
            <span>EXPLORE OUR STORE</span>
            <ArrowIcon />
          </a>
          <div className="absolute bottom-3 right-3 mb-4 mr-4 flex flex-col items-center gap-1">
            <h1 className="font-bold text-xl text-accent-content">
              NIKE AIR JORDAN I
            </h1>
            <div>
              <Rating />
              <span className="text-accent font-bold px-2 ml-2 border-l-2 border-gray-400">
                ₱6,895
              </span>
            </div>
            <a
              href="/shop"
              className="btn-ghost border-2 border-secondary rounded-lg inline-flex items-center space-x-2 text-secondary font-semibold px-4"
            >
              <span>BUY NOW</span>
            </a>
          </div>
        </div>
      </section>
      <section className="flex gap-20 pb-20 justify-center">
        <CollectionCard
          name="MENS COLLECTION"
          background="/assets/images/collection-1.jpg"
        />
        <CollectionCard
          name="WOMEN COLLECTION"
          background="/assets/images/collection-2.jpg"
        />
        <CollectionCard
          name="SPORTS COLLECTION"
          background="/assets/images/collection-3.jpg"
        />
      </section>
      <section className="pb-20">
        <h1 className="text-3xl md:text-4xl font-semibold py-2 block text-accent-content text-center">
          Bestselling Products
        </h1>
        <ProductCard product={latestProducts} />
      </section>
    </>
  );
};

export default Home;
