import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./Name";
import Photo from "./Photo";
import Address from "./Address";

function App() {
  return (
    <div classNameName="App">
      <div classNameName="page-content page-container" id="page-content">
        <div className="container padding justify-content-center ">
          <div className="row ">
            <div className="col-xl-12 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-12 bg-c-lite-green profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <Photo />
                      </div>
                      <Name />
                      <p>Web developer</p>{" "}
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                     
                    
                    
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <Address></Address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;