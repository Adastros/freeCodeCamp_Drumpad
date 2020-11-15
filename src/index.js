import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const rootElement = document.getElementById('drum-machine');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);