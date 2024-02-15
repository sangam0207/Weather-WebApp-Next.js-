// pages/about.js


import Navbar from '@/components/Navbar'; 

import Head from 'next/head';


const About = () => {
  return (
    <>
      
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
       
        <title>Weather APP</title>
       
        <link rel="shortcut icon" href="/weather.png" type="image/png" />
      </Head>
     
      <div className="container-fluid main_menu">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
       <Navbar/>
          </div>
        </div>
      </div>
      <div className="container-fluid main_header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row">
              <div className="col-md-6 col-12 main_header_right">
                <figure>
                  <img src="/my.jpeg" alt="sangam" className="img-fluid" />
                </figure>
              </div>
              <div className="col-md-6 col-12 main_header_left">
                <p>Welcome to my weather-app</p>
                <h1>I am A<span className="text_clr"> Mern Stack Developer</span>  </h1>
                <a href="https://www.linkedin.com/in/sangam-shukla-225412271/">
                  <button>About Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default About;
