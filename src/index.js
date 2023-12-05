import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { DonationProvider } from './Components/Donation/DonationContext';
import { NewsProvider } from './Components/NewsAndAnnouncements/NewsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DonationProvider>
      <NewsProvider>
        <App />
      </NewsProvider>

    </DonationProvider>
  </React.StrictMode>
);