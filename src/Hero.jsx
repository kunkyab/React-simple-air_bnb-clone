import React from 'react'
import image1 from '/images/image1.png'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-container'>
      <img className='hero-image' src={image1} alt="" />
      </div>
      <h1 className='hero-header'>Online Experiences</h1>
      <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </section>
  )
}

export default Hero
