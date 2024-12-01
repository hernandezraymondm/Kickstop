import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="p-4 max-w-[1300px] mx-auto my-5">
      <div className="hero-content text-center mb-24">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-secondary">Kickstop</span>
          </h1>
          <p className="py-6">
            Discover high-quality footwear crafted for every step. Shop our
            exclusive collection of shoes that combine style, comfort, and
            durability.
          </p>
          <Link
            to="/shop"
            className="btn btn-secondary mt-4 mb-12 text-white text-md font-bold"
          >
            Shop Now
          </Link>
          <h1 className="text-4xl font-bold text-center mb-6">
            About <span className="text-secondary">Kickstop</span>
          </h1>
          <p className="text-lg ">
            At Kickstop, we're passionate about shoes and committed to providing
            our customers with the best footwear options available. Our
            carefully curated selection features styles from top brands,
            ensuring quality and comfort with every step.
          </p>
          <p className="text-lg ">
            Founded with the mission to make high-quality shoes accessible to
            everyone, we pride ourselves on our exceptional customer service and
            an easy shopping experience. Whether you're looking for the latest
            trends or timeless classics, Kickstop has something for everyone.
          </p>
          <p className="text-lg ">
            Thank you for choosing Kickstop. We hope you enjoy shopping with us
            as much as we enjoy bringing you the best in footwear.
          </p>
          <p className="text-lg ">
            If you have any questions or need assistance, feel free to contact
            us. We're here to help you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
