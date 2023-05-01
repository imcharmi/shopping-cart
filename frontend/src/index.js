import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import productsReducer, { Productsfetch } from './features/productsSlice';
import cartReducer, { getsubtotal } from './features/cartSlice';

const store = configureStore({
  reducer : {
    products:productsReducer,
    cart:cartReducer
  }
})

store.dispatch(Productsfetch())
store.dispatch(getsubtotal())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>
);
