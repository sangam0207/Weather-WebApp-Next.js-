import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
const Navbars = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link href="/" className="navbar-brand">
       
          <i className="fas fa-snowflake"></i> SangamWeather{' '}
          <i className="fas fa-snowflake"></i>
       
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link href="/" className="nav-link">
              
                Home 
            
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/weather" className="nav-link">
             Weather
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbars;