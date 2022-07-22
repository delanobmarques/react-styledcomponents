import React from 'react'
import Features from '../components/Features/features.component';
import Hero from '../components/Hero/hero.component';
import Navbar from '../components/Navbar/navbar.component';


//Hero Feature Content Carousel

const Home = () => {
  return (
    <>
        <Hero />
        <Navbar />
        <Features />
    </>
  )
}

export default Home;