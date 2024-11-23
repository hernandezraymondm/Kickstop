import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import ArrowIcon from '../components/Icon/ArrowIcon';

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

  const latestProducts = product.slice(0, 3);

  return (
    <>
      <section
        className="section hero bg-cover bg-center p-32 mx-auto font-nunito"
        style={{ backgroundImage: "url('/assets/images/hero-banner.png')" }}
      >
        <div className="hero-content mb-10 mx-auto py-9 flex items-start flex-col w-full max-w-[1350px]">
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
        </div>
      </section>
      <section className="pb-20">
        <ProductCard product={latestProducts} />
      </section>
    </>
    // <section className="p-4 max-w-[1400px] mx-auto my-16">
    //   <div className="hero-content text-center mb-24">
    //     <div className="max-w-md">
    //       <h1 className="text-5xl font-bold">
    //         Welcome to <span className="text-secondary">Kickstop</span>
    //       </h1>
    //       <p className="py-6">
    //         Discover high-quality footwear crafted for every step. Shop our
    //         exclusive collection of shoes that combine style, comfort, and
    //         durability.
    //       </p>
    //       <a href="/shop" className="btn btn-secondary mt-4">
    //         Shop Now
    //       </a>
    //     </div>
    //   </div>

    //   <ProductCard product={latestProducts} />
    // </section>
  );
};

export default Home;
