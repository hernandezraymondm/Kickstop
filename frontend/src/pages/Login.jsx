import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
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
      className="flex flex-col items-center justify-start py-40 min-h-screen bg-base-100 hero bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/assets/images/hero-banner.png')" }}
    >
      <h2 className="text-2xl font-bold mb-10">Log In</h2>
      {statusMessage && (
        <p className="text-red-500 text-xs italic mb-2">{statusMessage}</p>
      )}

      <form
        className="w-full max-w-xs flex flex-col gap-4"
        onSubmit={submitHandler}
      >
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={loginData.email}
            onChange={changeInputHandler}
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={changeInputHandler}
            className="grow"
          />
        </label>

        <button
          type="submit"
          className="btn bg-orange-600 hover:bg-orange-700 font-semibold text-white rounded-lg py-2 px-4 w-full"
        >
          Log In
        </button>
      </form>
      <p className="mt-4">Don't have an account?</p>
      <Link
        to="/register"
        className="text-orange-600 hover:text-orange-700 text-xl font-medium ml-2"
      >
        Register
      </Link>
    </div>
  );
};

export default Login;
