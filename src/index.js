import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import AdminPanel from './users/AdminDashboard';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
