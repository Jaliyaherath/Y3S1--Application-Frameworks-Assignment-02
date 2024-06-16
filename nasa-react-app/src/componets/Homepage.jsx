import React from 'react';

//Importing images
import image1 from '../Images/image1.jpg';

import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';


const Homepage = () => {
    return (
        <div>
            <div>
                <h1 className="bg-blue-500 text-black text-lg p-3 text-center">Welcome to Nasa React App</h1>
            </div>
            

            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={image1} className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={image2} className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            <div>
            </div>
        </div>
    );
};

export default Homepage;;