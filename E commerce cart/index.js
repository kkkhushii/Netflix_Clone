import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import storereducer from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={storereducer}>
        <App />
    </Provider>,

    document.getElementById("root")

);
