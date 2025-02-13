import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArrowIcon from '../components/Icon/ArrowIcon';
import Rating from '../components/Rating/Rating';
import CollectionCard from '../components/Card/CollectionCard';
import ProductCard from '../components/Card/ProductCard';

const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product`)
      .then((response) => {
        setProduct(response.data.data);
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

  const latestProducts = product.slice(0, 24);

  return (
    <>
      <section
        id="featured"
        className="section hero bg-cover bg-no-repeat bg-center py-2 lg:px-[80px] mb-5 mx-auto font-nunito"
        style={{ backgroundImage: "url('/assets/images/hero-banner.png')" }}
      >
        <div className="hero-content relative mx-auto w-full grid lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="mt-5 mb-4 text-4xl md:text-5xl font-semibold block text-accent leading-tight">
              Discover the Latest
              <strong className="block text-4xl md:text-6xl mt-2">
                Shoes Collection
              </strong>
            </h1>
            <p className="mx-auto text-lg lg:mx-0 md:text-xl md:max-w-[46ch] text-accent-content mb-4">
              Step into the season with our latest styles. Discover unparalleled
              comfort and trendsetting designs that take your footwear game to
              the next level. Elevate your wardrobe with the perfect blend of
              fashion and functionality, designed for the modern lifestyle.
            </p>

            <Link
              to="/shop"
              className="btn bg-secondary hover:bg-primary inline-flex items-center space-x-2 text-white font-semibold"
            >
              <span>EXPLORE OUR STORE</span>
              <ArrowIcon />
            </Link>
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
            <div className="flex items-center">
              <Rating rating={4.5} />
              <span className="text-accent font-bold px-2 ml-2 border-l-2 border-gray-400">
                ₱6,895
              </span>
            </div>
            <Link
              to="/shop"
              className="btn-ghost border-2 border-secondary rounded-lg inline-flex items-center space-x-2 text-secondary font-semibold px-4 hover:border-secondary"
            >
              <span>BUY NOW</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="lg:px-[62px]">
        <div className="mx-auto max-w-[1470px]">
          <ul className="grid lg:grid-cols-2 2xl:grid-cols-4 justify-evenly">
            <li className="p-4 mx-auto">
              <div className="flex items-center space-x-4 bg-transparent  p-6">
                <img
                  src="./assets/images/service-1.png"
                  width="53"
                  height="28"
                  alt="Free Shipping"
                />

                <div>
                  <h3 className="h4 text-lg text-accent-content font-semibold">
                    Free Shipping
                  </h3>

                  <p className="text-gray-500">
                    All orders over <span>₱3,000</span>
                  </p>
                </div>
              </div>
            </li>

            <li className="p-4 mx-auto">
              <div className="flex items-center space-x-4 bg-transparent  p-6">
                <img
                  src="./assets/images/service-2.png"
                  width="43"
                  height="35"
                  alt="Quick Payment"
                />

                <div>
                  <h3 className="h4 text-lg text-accent-content font-semibold">
                    Quick Payment
                  </h3>

                  <p className="text-gray-500">100% secure payment</p>
                </div>
              </div>
            </li>

            <li className="p-4 mx-auto">
              <div className="flex items-center space-x-4 bg-transparent  p-6">
                <img
                  src="./assets/images/service-3.png"
                  width="40"
                  height="40"
                  alt="Free Returns"
                />

                <div>
                  <h3 className="h4 text-lg text-accent-content font-semibold">
                    Free Returns
                  </h3>

                  <p className="text-gray-500">Money back in 30 days</p>
                </div>
              </div>
            </li>

            <li className="p-4 mx-auto">
              <div className="flex items-center space-x-4 bg-transparent  p-6">
                <img
                  src="./assets/images/service-4.png"
                  width="40"
                  height="40"
                  alt="24/7 Support"
                />

                <div>
                  <h3 className="h4 text-lg text-accent-content font-semibold">
                    24/7 Support
                  </h3>

                  <p className="text-gray-500">Get Quick Support</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="collection" className="px-[2%] md:px-28 pb-5 ">
        <h1 className="text-2xl md:text-3xl font-semibold py-2 block text-accent text-center">
          <div className="divider uppercase my-10">Collection</div>
        </h1>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 max-w-[1350px] gap-y-7 mx-auto gap-5">
          <CollectionCard
            name="MENS COLLECTION"
            background="/assets/images/collection-1.jpg"
            target="men"
          />
          <CollectionCard
            name="WOMEN COLLECTION"
            background="/assets/images/collection-2.jpg"
            target="women"
          />
          <CollectionCard
            name="KIDS COLLECTION"
            background="/assets/images/collection-3.jpg"
            target="kids"
          />
        </div>
      </section>

      <section id="bestsellers" className="px-[2%] md:px-28 pb-5">
        <h1 className="text-2xl md:text-3xl font-semibold py-2 block text-accent text-center">
          <div className="divider uppercase my-10">Bestsellers</div>
        </h1>
        <ProductCard product={latestProducts} loading={loading} cards={24} />
      </section>
    </>
  );
};

export default Home;
