import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between">
      <Link to="#" className="text-white text-3xl font-bold">
        HIreca
      </Link>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? (
            <img src='cross.svg' alt='' width={'40px'} />
          ) : (
            <img src='/hamburger.svg' alt='' />
          )}
        </button>
      </div>

      <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:justify-end items-center flex-row`}>
      
        <li className="hidden md:block">
          <Link to="/" className="text-white text-lg hover:text-black">Home</Link>
        </li>
        <li className="hidden md:block">
          <Link to="/search" className="text-white text-lg hover:text-black">Search</Link>
        </li>
        <li className="hidden md:block">
          <Link to="/booking" className="text-white text-lg hover:text-black">Book</Link>
        </li>

        <li className="md:hidden">
          <Link
            to="/"
            className={`text-white text-lg hover:bg-blue-500 hover:text-black ${
              isOpen ? 'block p-4 mx-2 my-1 rounded-lg' : 'hover:bg-blue-500 hover:text-black'
            }`}
          >
            Home
          </Link>
        </li>
        <li className="md:hidden">
          <Link
            to="/search"
            className={`text-white text-lg hover-bg-blue-500 hover-text-black ${
              isOpen ? 'block p-4 mx-2 my-1 rounded-lg' : 'hover-bg-blue-500 hover-text-black'
            }`}
          >
            Search
          </Link>
        </li>
        <li className="md:hidden">
          <Link
            to="/booking"
            className={`text-white text-lg hover-bg-blue-500 hover-text-black ${
              isOpen ? 'block p-4 mx-2 my-1 rounded-lg' : 'hover-bg-blue-500 hover-text-black'
            }`}
          >
            Book
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
