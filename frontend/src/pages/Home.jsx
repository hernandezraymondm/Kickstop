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
        className="section hero bg-cover bg-no-repeat bg-center py-2 lg:px-[62px] mb-5 mx-auto font-nunito"
        style={{ backgroundImage: "url('/assets/images/hero-banner.png')" }}
      >
        <div className="hero-content relative mx-auto w-full grid lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl mt-5 md:text-5xl font-semibold mb-4 block text-accent">
              Discover the Latest
              <strong className="block md:text-6xl">Shoes Collection</strong>
            </h1>
            <p className="mx-auto text-lg lg:mx-0 md:text-xl md:max-w-[46ch] text-accent-content mb-4">
              Step into the season with our latest styles. Discover unparalleled
              comfort and trendsetting designs that take your footwear game to
              the next level. Elevate your wardrobe with the perfect blend of
              fashion and functionality, designed for the modern lifestyle.
            </p>
            <a
              href="/shop"
              className="btn btn-secondary inline-flex items-center space-x-2 text-white font-semibold"
            >
              <span>EXPLORE OUR STORE</span>
              <ArrowIcon />
            </a>
          </div>

          <img
            src={'/assets/images/shoe-featured.png'}
            alt={'Featured shoe'}
            className="w-full h-[600px] object-contain object-center"
          />
          <div className="absolute bottom-5 right-10 mb-6 mr-4 flex flex-col items-center gap-1">
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
              className="btn-ghost border-2 border-secondary rounded-lg inline-flex items-center space-x-2 text-secondary font-semibold px-4 hover:border-secondary"
            >
              <span>BUY NOW</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section service lg:px-[62px]">
        <div className="container mx-auto max-w-[1470px]">
          <ul className="service-list flex flex-wrap justify-evenly">
            <li className="service-item p-4">
              <div className="service-card flex items-center space-x-4 bg-transparent  p-6">
                <div className="card-icon">
                  <img
                    src="./assets/images/service-1.png"
                    width="53"
                    height="28"
                    loading="lazy"
                    alt="Service icon"
                  />
                </div>

                <div>
                  <h3 className="h4 card-title text-lg text-accent-content font-semibold">
                    Free Shipping
                  </h3>

                  <p className="card-text text-gray-500">
                    All orders over <span>₱3,000</span>
                  </p>
                </div>
              </div>
            </li>

            <li className="service-item p-4">
              <div className="service-card flex items-center space-x-4 bg-transparent  p-6">
                <div className="card-icon">
                  <img
                    src="./assets/images/service-2.png"
                    width="43"
                    height="35"
                    loading="lazy"
                    alt="Service icon"
                  />
                </div>

                <div>
                  <h3 className="h4 card-title text-lg text-accent-content font-semibold">
                    Quick Payment
                  </h3>

                  <p className="card-text text-gray-500">100% secure payment</p>
                </div>
              </div>
            </li>

            <li className="service-item p-4">
              <div className="service-card flex items-center space-x-4 bg-transparent  p-6">
                <div className="card-icon">
                  <img
                    src="./assets/images/service-3.png"
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Service icon"
                  />
                </div>

                <div>
                  <h3 className="h4 card-title text-lg text-accent-content font-semibold">
                    Free Returns
                  </h3>

                  <p className="card-text text-gray-500">
                    Money back in 30 days
                  </p>
                </div>
              </div>
            </li>

            <li className="service-item p-4">
              <div className="service-card flex items-center space-x-4 bg-transparent  p-6">
                <div className="card-icon">
                  <img
                    src="./assets/images/service-4.png"
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Service icon"
                  />
                </div>

                <div>
                  <h3 className="h4 card-title text-lg text-accent-content font-semibold">
                    24/7 Support
                  </h3>

                  <p className="card-text text-gray-500">Get Quick Support</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="collection" className="lg:px-12">
        <h1 className="text-2xl md:text-3xl font-semibold py-2 block text-accent text-center">
          <div className="divider uppercase my-10">Collection</div>
        </h1>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 max-w-[1450px] gap-y-7 mx-auto place-items-center">
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
        </div>
      </section>
      <section id="bestsellers" className="lg:px-28">
        <h1 className="text-2xl md:text-3xl font-semibold py-2 block text-accent text-center">
          <div className="divider uppercase my-10">Bestsellers</div>
        </h1>
        <ProductCard product={latestProducts} />
      </section>
    </>
  );
};

export default Home;
