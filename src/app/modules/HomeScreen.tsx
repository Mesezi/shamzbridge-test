import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Vision from '../components/Vision'
import Testimonials from '../components/Testimonials'

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <About />
      <Stats />
      <Vision />
      <Services />
      <Testimonials />
    
    </div>
  )
}

export default HomeScreen
