import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EmailIcon from '../components/Icon/EmailIcon';
import PhoneIcon from '../components/Icon/PhoneIcon';
import LocationIcon from '../components/Icon/LocationIcon';
import SunIcon from '../components/Icon/SunIcon';

const Contact = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const changeInputHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    if (statusMessage) setStatusMessage('');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/auth/login`,
        loginData
      );
      console.log(response.data);

      localStorage.setItem('token', response.data.token);

      navigate('/admin');
    } catch (error) {
      if (error.response) {
        setStatusMessage(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    }
  };

  return (
    <div
      className="flex flex-col-reverse lg:flex-row gap-x-10 p-10 md:px-32 lg:p-32 items-start justify-center min-h-screen bg-base-100 hero bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/assets/images/hero-banner.png')" }}
    >
      <div className="w-full lg:max-w-[380px] bg-base-100 p-5 sm:p-10 rounded-2xl text-accent-content shadow-xl">
        <h2 className="text-2xl font-bold mb-10">Contact Information</h2>
        <div className="space-y-5 ">
          <div className="flex items-center gap-3">
            <EmailIcon />
            <span>
              <p>Email</p>
              <p className="font-medium">rayhernandez.dev@gmail.com</p>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon />
            <span>
              <p>Phone</p>
              <p className="font-medium">+639 15 529 3987</p>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <LocationIcon />
            <span>
              <p>Address</p>
              <p className="font-medium">Cavite, Philippines</p>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <SunIcon />
            <span>
              <p>Working hours</p>
              <p className="font-medium">8 a.m. - 11 p.m.</p>
            </span>
          </div>
        </div>
      </div>
      <form
        className="w-full max-w-2xl flex flex-col gap-4 py-10"
        onSubmit={submitHandler}
      >
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        {statusMessage && (
          <p className="text-red-500 text-xs italic mb-2">{statusMessage}</p>
        )}
        <div className="flex flex-col xl:flex-row gap-2 ">
          <input
            type="text"
            placeholder="Full name"
            name="name"
            value={loginData.name}
            onChange={changeInputHandler}
            className="grow input input-bordered flex items-center gap-2"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={loginData.email}
            onChange={changeInputHandler}
            className="grow input input-bordered flex items-center gap-2"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={loginData.subject}
          onChange={changeInputHandler}
          className="grow input input-bordered flex items-center gap-2"
        />
        <textarea
          id="message"
          type="text"
          name="message"
          placeholder="Message"
          value={loginData.message}
          onChange={changeInputHandler}
          className="grow textarea textarea-bordered textarea-lg lg:textarea-xs xl:textarea-lg flex items-center gap-2"
        />

        <button
          type="submit"
          className="btn bg-orange-600 hover:bg-orange-700 font-semibold text-white rounded-lg py-2 px-4 w-full"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
