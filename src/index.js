import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { configureStore } from './store/index';

const store = configureStore();
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
