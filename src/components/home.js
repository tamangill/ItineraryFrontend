import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to Itinerary Generator</h1>
      <Carousel>
        <div> 
          <img src="https://example.com/image1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://example.com/image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="https://example.com/image3.jpg" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;