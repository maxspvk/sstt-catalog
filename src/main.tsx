import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/* this script finds an empty container on the page, checks if it exists, seizes control of it, 
and inserts <App /> into it, wrapped in an error checking system.*/

const rootElement = document.getElementById('root'); // search for an element on the page whose id is "root"

/* security check: if the element is NOT found, stop the program execution and output an error to the console. */
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement); // createRoot takes over the div and starts controlling everything that happens in it

/* "App" component, wraps itself in an error checking system (StrictMode) 
and draws the result inside the HTML element that we captured earlier in the root variable */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
