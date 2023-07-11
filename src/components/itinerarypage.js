import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItineraryPage = ({ match }) => {
  const [itineraryData, setItineraryData] = useState(null);
  const location = match.params.location;

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/itinerary/${location}`);
        setItineraryData(response.data);
      } catch (error) {
        console.error('Error fetching itinerary data:', error);
      }
    };

    fetchItinerary();
  }, [location]);

  return (
    <div>
      <h1>Itinerary for {location}</h1>
      {itineraryData && (
        <div>
          <h2>Attractions:</h2>
          <ul>
            {itineraryData.attractions.map((attraction, index) => (
              <li key={index}>
                <h3>{attraction.name}</h3>
                <p>{attraction.address}</p>
                <p>Rating: {attraction.rating}</p>
              </li>
            ))}
          </ul>

          <h2>Hotels:</h2>
          <ul>
            {itineraryData.hotels.map((hotel, index) => (
              <li key={index}>
                <h3>{hotel.name}</h3>
                <p>{hotel.address}</p>
                <p>Rating: {hotel.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItineraryPage;
