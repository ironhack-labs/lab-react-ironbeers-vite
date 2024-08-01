// import React, { useState, useEffect } from 'react';
// import BeerCardDetails from '../components/BeerCardDetails';

// const RandomBeerPage = () => {

//     const [beer, setBeer] = useState(null);
//     const fetchRandomBeer = async () => {
//         try {
//             const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/random');
//             const data = await response.json();
//             setBeer(data);
//         } catch (error) {
//             console.error('Error fetching random beer:', error);
//         }
//     };

//   useEffect(() => {
//     fetchRandomBeer();
//   }, []);

//   if (!beer) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <BeerCardDetails beer={beer} />
//     </div>
//   );
// };

// export default RandomBeerPage;