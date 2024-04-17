import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // with the help of that we can provide our redux store to the react (Basically a connection between redux and react)
    <Provider store={store}> 
        <App />
    </Provider>
    );
