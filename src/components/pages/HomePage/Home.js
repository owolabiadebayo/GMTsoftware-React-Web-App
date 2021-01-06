import React from 'react';
import HomeSection from './HomeSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './HomeData';
import Pricing from '../../Pricing';
import Home2 from './Home2';
import Home3 from './Home3';
import Program from './Program';
import Header from './Header';


function Home() {
  return (
    <>
      <HomeSection />
   
      <Home2/>
      <Program/>
      <Home3/>
      
    </>
  );
}

export default Home;
