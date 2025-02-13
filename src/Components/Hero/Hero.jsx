import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Amish Patel,</span> GRAPHIC DESIGNER based in Surat.</h1>
        <p>I am a graphics designer from Surat, GUJARAT with 2 years of experience in multiple companies like Uniquesdata, Mindinventory and StarkSouk.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
