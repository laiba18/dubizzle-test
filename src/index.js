import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchProvider from './context/SearchContext';

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

