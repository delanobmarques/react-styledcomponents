import React from 'react'
import { Content } from '../components/Content/content.component';
import Features from '../components/Features/features.component';
import Hero from '../components/Hero/hero.component';
import { heroOne, heroTwo, heroThree } from '../data/hero.data';


//Hero Feature Content Carousel

const Home = () => {
  return (
    <>
        <Hero />        
        <Features />
        <Content {...heroOne} />
        <Content {...heroTwo} />
        <Content {...heroThree} />
    </>
  )
}

export default Home;