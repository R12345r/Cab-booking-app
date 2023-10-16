const cabCategories = [
  {
    id: 1,
    name: 'Economy',
    price: '$30',
    estimatedArrival: '10 minutes',
    image: '/eco.png',
  },
  {
    id: 2,
    name: 'Premium',
    price: '$50',
    estimatedArrival: '5 minutes',
    image: '/pre.jpg',
  },
  {
    id: 3,
    name: 'Luxury',
    price: '$100',
    estimatedArrival: '3 minutes',
    image: '/mw.png',
  },
];


const additionalCars = [
  { id: 4, name: 'Cab: Alto 800', type: 'Economy', price: '$35', estimatedArrival: '12 minutes', image: '/alto.jpg' },
  { id: 5, name: 'Cab:Ertiga', type: 'Premium', price: '$55', estimatedArrival: '6 minutes', image: '/ertiga.jpeg' },
  { id: 6, name: 'Cab: Maruti Fornix', type: 'Luxury', price: '$55', estimatedArrival: '4 minutes', image: '/maruti fronix.jpeg' },
  { id: 7, name: 'Cab: Rolls-Royce Phantom', type: 'Luxury', price: '$200', estimatedArrival: '4 minutes', image: '/rolls-royce.png' }
];


const updatedCabCategories = cabCategories.concat(additionalCars);

export default updatedCabCategories;
