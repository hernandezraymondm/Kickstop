import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { CartProvider } from './context/CartContext.jsx';
import { LikeProvider } from './context/LikeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <CartProvider>
        <LikeProvider>
          <App />
        </LikeProvider>
      </CartProvider>
    </SnackbarProvider>
  </BrowserRouter>
);
