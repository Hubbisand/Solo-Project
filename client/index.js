import React from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import store from './store.js';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store} >
    <App />
  </Provider>
);