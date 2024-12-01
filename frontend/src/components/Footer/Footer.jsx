import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import LinkedInIcon from '../Icon/LinkedInIcon';
import GitHubIcon from '../Icon/GitHubIcon';
import FacebookIcon from '../Icon/FacebookIcon';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/subscriber`,
        { email }
      );
      enqueueSnackbar(`Subscription successful: ${response.data.email}`, {
        variant: 'success',
      });
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      enqueueSnackbar('Error subscribing: ' + error.response.data, {
        variant: 'error',
      });
    }
  };

  return (
    <footer className="footer p-10 md:px-24 bg-base-200 text-base-content">
      <div className="flex justify-between flex-wrap w-full max-w-[1600px] mx-auto">
        <aside>
          <h2 className="text-3xl">KICKSTOP</h2>
          <p>Your one-stop shop for the latest kicks and trends.</p>
          <p>
            This e-commerce platform offers a seamless and dynamic shopping
            experience,
          </p>
          <p>
            powered by modern web technologies to ensure smooth and responsive
            user interactions.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <LinkedInIcon tooltip={'bottom'} />
            <GitHubIcon tooltip={'bottom'} />
            <FacebookIcon tooltip={'bottom'} />
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover block">rayhernandez.dev@gmail.com</a>
          <a className="link link-hover block">+639 15 529 3987</a>
        </nav>
        <form onSubmit={handleSubscribe}>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="email"
                placeholder="yahoo@gmail.com"
                className="input input-bordered join-item"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
