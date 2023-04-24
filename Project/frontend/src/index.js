import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartContextProvider from './contexts/CartContext';
import ProductsContextProvider from './contexts/ProductsContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);