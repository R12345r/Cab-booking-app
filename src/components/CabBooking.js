import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Booking({ cabCategories }) {
  const { id } = useParams();
  const selectedCab = cabCategories.find((cab) => cab.id === parseInt(id));
  const [numPassengers, setNumPassengers] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = () => {
    setBookingConfirmed(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Confirm Your Booking</h1>
        <div className="flex items-center justify-center">
          <img src={selectedCab.image} alt={selectedCab.name} className="w-72 h-72 rounded-full" />
        </div>
        <h2 className="text-2xl font-semibold mt-6 text-center text-blue-500">{selectedCab.name}</h2>
        <p className="text-gray-600 text-lg text-center">Type: {selectedCab.type}</p>
        <p className="text-gray-600 text-lg text-center">Price: {selectedCab.price}</p>
        <p className="text-gray-600 text-lg text-center">Estimated Arrival: {selectedCab.estimatedArrival}</p>
        <label className="block mt-6 text-center">
          Number of Passengers:
          <input
            type="number"
            value={numPassengers}
            onChange={(e) => setNumPassengers(e.target.value)}
            min="1"
            className="border border-gray-300 rounded w-16 px-2 py-1 ml-2"
          />
        </label>
        <div className="flex justify-center mt-6">
  <button
    onClick={handleBooking}
    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded sm:w-1/4 w-full"
  >
    Confirm Booking
  </button>
</div>



        {bookingConfirmed && (
          <div className="mt-6 text-center">
            <p className="text-green-600 text-lg font-semibold">
              Booking confirmed! Thank you for choosing {selectedCab.name}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;
