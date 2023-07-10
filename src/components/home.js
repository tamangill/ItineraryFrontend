import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to Itinerary Generator</h1>
      <Carousel>
        <div> 
          <img src="https://www.bbb.org/all/travel-leisure/_jcr_content/socialImage.coreimg.jpeg/1624972217250/gettyimages-155375632.jpeg" alt="Image 1" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?cs=srgb&dl=pexels-te-lensfix-1371360.jpg&fm=jpg" alt="Image 3" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-oleksandr-canary-islands-3278215.jpg&fm=jpg" alt="Image 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;