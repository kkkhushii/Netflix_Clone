import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './input.css';
import 'antd/dist/reset.css';
import { BrowserRouter } from "react-router-dom";
import store from './app/store.js';
import { Provider } from 'react-redux'


ReactDOM.render(
   <BrowserRouter>
   <Provider store={store}>
   <App />
   </Provider>
 </BrowserRouter>,
  document.getElementById('root')
);


