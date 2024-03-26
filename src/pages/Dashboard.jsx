import React from 'react'
import bg1 from '../assests/pngs/bg1.jpg'
import Cards from '../components/Cards'
import Hero from '../components/Hero.jsx';
import Carddetails from '../components/Carddetails.jsx';
import Cardresult from '../components/Cardresult.jsx';
import Footer from '../components/Footer.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { useState } from 'react';



const Home = () => {

  return (
    <div>
      
      <div className='bg-center bg-cover' style={{backgroundImage: `url(${bg1})`
      }}>
        <SearchBar />
        <Cards />
      </div>
      <div>
      <Hero />
      <Carddetails />
      <Cardresult />
      <Footer />
    </div>
      </div >
  )
}

export default Home;