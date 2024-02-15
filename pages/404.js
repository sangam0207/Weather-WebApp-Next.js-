import Navbar from "@/components/Navbar";


const ErrorPage = () => {
  return (
    <>
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
            <div className="col-md-6 col-12 main_header_right">
              <figure>
                <img src="/404.jpg" alt="error" className="img-fluid" />
              </figure>
            </div>
            <div className="col-md-6 col-12 main_header_left">
              <p>Something Went Wrong</p>
              <h1>Error 404 , Page not found</h1>
              <a href="/"><button>Back to Home</button></a>
            </div>
          </div>
        </div>
      </div>
    </div></>
   
 
  );
};

export default ErrorPage;
