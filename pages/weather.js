import { useState, useContext, useEffect } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import styles from '../styles/Weather.module.css';

const Weather = () => {
  const { getWeatherInfo } = useContext(WeatherContext);
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [day, setDay] = useState('');
  const [todayData, setTodayData] = useState('');

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const getCurrentDayAndDate = () => {
    const date = new Date();
    const TodayDate = date.getDate();
    let TodayDay;
    switch (date.getDay()) {
      case 0:
        TodayDay = "Sunday";
        break;
      case 1:
        TodayDay = "Monday";
        break;
      case 2:
        TodayDay = "Tuesday";
        break;
      case 3:
        TodayDay = "Wednesday";
        break;
      case 4:
        TodayDay = "Thursday";
        break;
      case 5:
        TodayDay = "Friday";
        break;
      case 6:
        TodayDay = "Saturday";
    }
    let month;
    switch (date.getMonth()) {
      case 0:
        month = "JAN";
        break;
      case 1:
        month = "FEB";
        break;
      case 2:
        month = "MAR";
        break;
      case 3:
        month = "APR";
        break;
      case 4:
        month = "MAY";
        break;
      case 5:
        month = "JUN";
        break;
      case 6:
        month = "JUL";
        break;
      case 7:
        month = "AUG";
        break;
      case 8:
        month = "SEP";
        break;
      case 9:
        month = "OCT";
        break;
      case 10:
        month = "NUM";
        break;
      case 11:
        month = "DEC";
        break;
    }
    setDay(TodayDay);
    setTodayData(`${TodayDate} ${month}`);
  };

  useEffect(() => {
    getCurrentDayAndDate();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getWeatherInfo(cityName);
      console.log(data)
      setWeatherData(data);
      setErrorMessage('');
    } catch (error) {
      setWeatherData(null);
      setErrorMessage('Please enter a valid city name');
    }
  };

  return (
    <>
      <Head>
        <title>Weather APP</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <div className="container-fluid main_menu">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="container-fluid main_header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="main_content">
              <form onSubmit={handleFormSubmit} className="temp_form">
                <input
                  type="text"
                  id="cityName"
                  value={cityName}
                  onChange={handleInputChange}
                  placeholder="Enter Your City Name"
                  autoComplete="off"
                />
                <input type="submit" value="Search" id="submitBtn" />
              </form>
            </div>
            <div className="tempInformation">
              <div className="top_layer">
                <p id="day">{day}</p>
                <p id="today_data">{todayData}</p>
              </div>
              <div className="main_layer">
                <p id="city_name">{weatherData ? weatherData.name : 'Get Output'}</p>
                <div id="hideShow" className={`middle_layer ${weatherData ? '' : 'data_hide'}`}>
                  <p id="temp">
                    <span id="tempVal">{weatherData ? weatherData.main.temp : 0}</span>
                    <sup>0</sup>C
                  </p>
                 
                </div>
               
              </div>
             
             
            </div>
            {weatherData && (
                    <div style={{textAlign:'center', marginBlock:'50px', fontSize:'2rem' ,padding:'5px', border:'2px solid black', backgroundColor:'#36454F',color:'white', fontWeight:500}}>
                      <p>Humidity: {weatherData.main.humidity}</p>
                      <p>Pressure: {weatherData.main.pressure}</p>
                      <p>Wind Speed: {weatherData.wind.speed}</p>
                   
                    </div>
                  )}
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Weather;
