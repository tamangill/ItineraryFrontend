import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './itinerary.css';

const ItineraryPage = () => {
  const [itineraryData, setItineraryData] = useState(null);
  const { location } = useParams();

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/itinerary/${location}`);
        const { attractions, hotels } = response.data;
        const itineraries = [];

        // Create multiple itineraries with a maximum of 5 attractions and 1 hotel each
        for (let i = 0; i < attractions.length; i += 5) {
          const itinerary = {
            attractions: attractions.slice(i, i + 5),
            hotel: hotels[i / 5] || null
          };
          itineraries.push(itinerary);
        }

        setItineraryData(itineraries);
        console.log("ITINERARIES: ", itineraries);
      } catch (error) {
        console.error('Error fetching itinerary data:', error);
      }
    };

    fetchItinerary();
  }, [location]);

  const createItineraries = (itineraryData) => {
    const attractions = itineraryData.attractions || [];
    const hotels = itineraryData.hotels || [];

    const itineraries = [];

    while (attractions.length > 0 && hotels.length > 0) {
      const itinerary = {
        attractions: attractions.splice(0, Math.min(5, attractions.length)),
        hotels: hotels.splice(0, 1),
      };
      itineraries.push(itinerary);
    }

    return itineraries;
  };

  return (
    <div className="itinerary-page">
      {itineraryData ? (
        <div>
          <h1 className="title">Itinerary for {location}</h1>

          <div className="itinerary-container">
            {itineraryData.length > 0 ? (
              itineraryData.map((itinerary, index) => (
                <div key={index} className="itinerary-item">
                  <h2>Itinerary {index + 1}</h2>

                  <h3>Attractions:</h3>
                  <div className="attractions">
                    {itinerary.attractions.map((attraction, index) => (
                      <div key={index} className="attraction">
                        <div className="checkmark">✓</div>
                        <div className="attraction-details">
                          <p className="attraction-name">{attraction.name} </p>
                          <p className="attraction-address">{attraction.address} </p>
                          <div className="rating">
                            Rating: {attraction.rating} stars
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3>Hotel:</h3>
                  <div className="hotel">
                    <div className="checkmark">✓</div>
                    <div className="hotel-details">
                      <p className="hotel-name">{itinerary.hotel?.name} </p>
                      <p className="hotel-address">{itinerary.hotel?.address} </p>
                      <div className="rating">
                        Rating: {itinerary.hotel?.rating} stars
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No itinerary data available</p>
            )}
          </div>
        </div>
      ) : (
        <p className='loading-text'>Loading...</p>
      )}
      {/* Button to navigate back to the home page */}
      <Link to="/">
        <button className="create-itineraries-button">Create New Itineraries</button>
      </Link>
    </div>
  );
};

export default ItineraryPage;
