import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextProvider from "./context/provider";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

