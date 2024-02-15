// contexts/WeatherContext.js

import { createContext } from 'react';

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const getWeatherInfo = async (cityName) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b172cc48a1208ac541ad1aa7bcbdb336`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  };

  return (
    <WeatherContext.Provider value={{ getWeatherInfo }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
