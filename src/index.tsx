import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App1 from './App1';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App1 />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

