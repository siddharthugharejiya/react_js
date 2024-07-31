import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
// import { store } from './Redux/store.js';

import { BrowserRouter } from 'react-router-dom';
import { storee } from './Redux_Singup/storee.js';

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={storee}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
 
);
