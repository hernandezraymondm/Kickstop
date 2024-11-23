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
        className="section hero bg-cover bg-center p-32  mx-auto  font-nunito"
        style={{ backgroundImage: "url('/assets/images/hero-banner4.png')" }}
      >
        <div className="hero-content mb-24 mx-auto  py-9 flex items-start flex-col w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 block text-accent">
            New Summer <strong className="block">Shoes Collection</strong>
          </h1>
          <p className="text-lg md:text-xl mb-8 bloc max-w-[46ch] text-accent-content">
            Competently expedite alternative benefits whereas leading-edge
            catalysts for change. Globally leverage existing an expanded array
            of leadership.
          </p>
          <a
            href="/shop"
            className="btn btn-secondary inline-flex items-center space-x-2 text-accent-content font-semibold"
          >
            <span>EXPLORE OUR STORE</span>
            <ArrowIcon />
          </a>
        </div>
      </section>
      <ProductCard product={latestProducts} />
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
