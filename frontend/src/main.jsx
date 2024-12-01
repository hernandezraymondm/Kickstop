import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { CartProvider } from './contexts/CartContext.jsx';
import { LikeProvider } from './contexts/LikeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <CartProvider>
          <LikeProvider>
            <App />
          </LikeProvider>
        </CartProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
