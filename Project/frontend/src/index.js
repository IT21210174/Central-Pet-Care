import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartContextProvider from './contexts/CartContext';
import ProductsContextProvider from './contexts/ProductsContext';
import WishlistContextProvider from './contexts/WishlistContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <App />
        </WishlistContextProvider>
      </CartContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);