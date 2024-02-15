import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'

// pages/_app.js

import WeatherContextProvider from '../contexts/WeatherContext';

function MyApp({ Component, pageProps }) {
  return (
    <WeatherContextProvider>
      <Component {...pageProps} />
    </WeatherContextProvider>
  );
}

export default MyApp;
