import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const availableCabs = [
  { id: 1, name: 'Cab: Wagon R', type: 'Economy', price: '$30', estimatedArrival: '10 minutes', image: '/eco.png' },
  { id: 2, name: 'Cab: Honda city', type: 'Premium', price: '$50', estimatedArrival: '5 minutes', image: '/pre.jpg' },
  { id: 3, name: 'Cab: Mercedez Benz A-Class Limousine', type: 'Luxury', price: '$100', estimatedArrival: '3 minutes', image: '/mw.png' },
];

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pickup = searchParams.get('pickup');
  const dropoff = searchParams.get('dropoff');
  const selectedCategory = searchParams.get('category');
  const navigate = useNavigate();

  const filteredCabs = availableCabs.filter((cab) => (
    cab.type === selectedCategory && cab.name !== pickup && cab.name !== dropoff
  ));

  const handleBookingClick = (id) => {
    navigate(`/booking/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <p className="mb-2">Pickup: {pickup}</p>
      <p className="mb-2">Drop-off: {dropoff}</p>
      <p className="mb-4">Selected Category: {selectedCategory}</p>
      <h2 className="text-2xl font-semibold mb-4">Available Cabs:</h2>
      <ul>
        {filteredCabs.map((cab) => (
          <li key={cab.id} className="mb-4 p-4 border rounded-lg flex flex-col md:flex-row items-center justify-between bg-white shadow-lg">
            <div className="mb-4 md:mb-0 md:mr-4 md:w-1/2">
              <p className="text-2xl font-semibold mb-2">{cab.name}</p>
              <p>Type: {cab.type}</p>
              <p>Price: {cab.price}</p>
              <p>Estimated Arrival: {cab.estimatedArrival}</p>
              <button
                className="w-48 h-12 rounded-full text-white
                bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 mt-4"
                onClick={() => handleBookingClick(cab.id)}
              >
                Book Now
              </button>
            </div>
            <img src={cab.image} alt={cab.name} className="w-32 h-32 md:w-48 md:h-48" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
