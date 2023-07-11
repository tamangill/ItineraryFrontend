import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItineraryPage = () => {
  const [itineraryData, setItineraryData] = React.useState(null);
  const { location } = useParams();

  React.useEffect(() => {
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
    <div>
      {itineraryData ? (
        <div>
          <h1>Itinerary for {location}</h1>
  
          {itineraryData.length > 0 ? (
            itineraryData.map((itinerary, index) => (
              <div key={index}>
                <h2>Itinerary {index + 1}</h2>
  
                <h3>Attractions:</h3>
                <ul>
                  {itinerary.attractions.map((attraction, index) => (
                    <li key={index}>
                      <h4>{attraction.name}</h4>
                      <p>{attraction.address}</p>
                      <p>Rating: {attraction.rating}</p>
                    </li>
                  ))}
                </ul>
  
                <h3>Hotel:</h3>
                <div>
                  <h4>{itinerary.hotel?.name}</h4>
                  <p>{itinerary.hotel?.address}</p>
                  <p>Rating: {itinerary.hotel?.rating}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No itinerary data available</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
      }

export default ItineraryPage;
