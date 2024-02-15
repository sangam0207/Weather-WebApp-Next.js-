// pages/index.js

import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar'; // Assuming you have defined Navbar component

const IndexPage = () => {
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
      <div>
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
              <div className="row">
                <div className="col-md-6 col-12 main_header_left">
                  <p>Welcome to weather app</p>
                  <h1>
                    Get The Latest<span className="text_clr">Weather</span> info
                    of your City
                  </h1>
                  <Link href="/weather" passHref>
                    <button>Check Now</button>
                  </Link>
                </div>
                <div className="col-md-6 col-12 main_header_right">
                  <img
                    className="d-block w-100"
                    src="/2.jpg"
                    alt="Weather"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
