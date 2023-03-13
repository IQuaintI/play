import React from 'react'; // This is the default export, so we can name it anything we want.
import ReactDOM from 'react-dom'; // This is the default export, so we can name it anything we want.
import App from './App'; // This is the default export, so we can name it anything we want.
import './styles/GlobalStyles.css';
import '@fontsource/poppins/500.css'; // Defaults to weight 500 with all styles included.
import '@fontsource/poppins/600.css'; // Defaults to weight 600 with all styles included.
import '@fontsource/poppins/700.css'; // Defaults to weight 700 with all styles included.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
