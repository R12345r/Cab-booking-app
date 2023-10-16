import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cabCategories from '../data/cabs'; 
import Below from './Below';

function HomePage() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');


  const filteredCabCategories = cabCategories.filter((category) => (
    category.name === 'Economy' || category.name === 'Premium' || category.name === 'Luxury'
  ));

  const isFormValid = pickup && dropoff && selectedCategory;

  return (
    <div className="h-screen bg-center bg-cover bg-blur" style={{ backgroundImage: 'url(/city.jpg)' }}>
      <div className="flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-80 rounded p-8 w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h1 className="text-4xl font-bold mb-6 text-black">Welcome to Hireca Cabs</h1>
          <div className="mb-6">
            <label className="text-lg font-semibold block text-black">Pickup Location:</label>
            <input
              type="text"
              className="w-full p-3 border rounded text-black"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="text-lg font-semibold block text-black">Drop-off Location:</label>
            <input
              type="text"
              className="w-full p-3 border rounded text-black"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
            />
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-black">Select Cab Category:</h2>
          <ul>
            {filteredCabCategories.map((cabCategory) => (
              <li key={cabCategory.id} className="mb-3">
                <label className="block">
                  <input
                    type="radio"
                    name="category"
                    value={cabCategory.name}
                    checked={selectedCategory === cabCategory.name}
                    onChange={() => setSelectedCategory(cabCategory.name)}
                  />
                  <span className="ml-2 text-lg font-semibold text-black">{cabCategory.name}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Link
              to={
                isFormValid
                  ? `/search?pickup=${pickup}&dropoff=${dropoff}&category=${selectedCategory}`
                  : '/'
              }
              className={`${
                isFormValid
                  ? 'bg-blue-500 hover.bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center w-full'
                  : 'bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg text-center w-full cursor-not-allowed'
              }`}
            >
              Search Cabs
            </Link>
          </div>
        </div>
      </div>
      <Below />
    </div>
  );
}

export default HomePage;
