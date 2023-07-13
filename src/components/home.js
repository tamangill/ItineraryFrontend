/* Author: Taman Gill
 * Description: This file defines the Home component, which serves as the landing page of the Itinerary Generator application.
 *              It displays a carousel of images, a description of the application, and a form to enter the user's location.
 *              The user can submit the location to generate a personalized itinerary.
 * Date: 07/2023
 * Copyright: 2023 Taman Gill
 */

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  const [location, setLocation] = useState('');

  // Event handler for location input change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  
  return (
    <div className="container">
      <h1 className="title">Itinerary Generator</h1>
      
      {/* Carousel */}
      <div className='carousel-container'>
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
      
      {/* Description */}
      <div className='description-container'>
        <div className="description">
          <h2>Description:</h2>
          <p>
            Itinerary Generator is an application that helps you plan your travel itineraries.
            Enter your desired location in the form below to get personalized attractions and hotel recommendations.
            Let Itinerary Generator take care of your travel plans and make your trip memorable!
          </p>
        </div>
      </div>
      
      {/* Location form */}
      <div className='location-container'>
        <div className="location-form">
          <h2>Enter your location:</h2>
          <form>
            <input type="text" placeholder="Enter location" value={location} onChange={handleLocationChange} />
            <Link to={`/itinerary/${location}`}><button type="submit">Submit</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
