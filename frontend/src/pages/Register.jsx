import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const changeInputHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setStatusMessage('');
    setIsSuccess(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.password2) {
      setIsSuccess(false);
      setStatusMessage('Passwords do not match');
      return;
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/auth/register`,
        {
          name: userData.name,
          email: userData.email,
          password: userData.password,
        },
        config
      );

      setIsSuccess(true);
      setStatusMessage('Registration successful');
      navigate('/login');
    } catch (error) {
      setIsSuccess(false);
      setStatusMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-start py-40 min-h-screen bg-base-100 hero bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/assets/images/hero-banner.png')" }}
    >
      <h2 className="text-2xl font-bold mb-10">Register</h2>

      {statusMessage && (
        <p
          className={`${
            isSuccess ? 'text-green-500' : 'text-red-500'
          } text-lg italic mb-4`}
        >
          {statusMessage}
        </p>
      )}

      <form
        className="w-full max-w-xs flex flex-col gap-4"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Username"
          name="name"
          value={userData.name}
          onChange={changeInputHandler}
          className="shadow border rounded-md w-full py-2 px-3 text-gray-700"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={changeInputHandler}
          className="shadow border rounded-md w-full py-2 px-3 text-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={changeInputHandler}
          className="shadow border rounded-md w-full py-2 px-3 text-gray-700"
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={userData.password2}
          onChange={changeInputHandler}
          className="shadow border rounded-md w-full py-2 px-3 text-gray-700"
        />

        <button
          type="submit"
          className="btn bg-orange-600 hover:bg-orange-700 font-semibold text-white rounded-lg py-2 px-4 w-full"
        >
          Register
        </button>
      </form>

      <p className="mt-4">Already have an account?</p>
      <Link
        to="/login"
        className="text-orange-600 hover:text-orange-700 text-xl font-medium ml-2"
      >
        Sign In
      </Link>
    </div>
  );
};

export default Register;
