import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

ReactDOM.render(
<Provider>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
