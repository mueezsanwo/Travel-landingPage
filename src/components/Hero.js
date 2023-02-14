import React from 'react';
import '../styles/hero.css';
import Video from '../assets/maldivesVideo.mp4';
import { HiOutlineSearch } from 'react-icons/hi';


const Hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video' >
          <source src={Video} type='video/mp4' />
        </video>
        <div className='overlay'></div>
        <div className='content'>
            <h1>First Class Travel</h1>
            <h2>Best Locations Worldwide</h2>
            <form className='form'>
              <div>
                <input type='text' placeholder='Search Destinations'/>
              </div>
              <div>
                <button><HiOutlineSearch className='icon'/></button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Hero