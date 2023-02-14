import React from 'react';
import '../styles/destinations.css';
import Borabora from '../assets/borabora.jpg';
import Borabora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';

const Destinations = () => {
  return (
    <div name='destinations' className='destinations'>
        <div className='container'>
          <h1>All-Inclusive Resorts</h1>
          <p>On the Caribbean's Best Beaches</p>
          <div className='img-container'>
            <img className='span-3 image-grid-row-2' src={Borabora} alt=''/>
            <img src={Borabora2} alt=''/>
            <img src={Maldives} alt=''/>
            <img src={Maldives2} alt=''/>
            <img src={Maldives3} alt=''/>
          </div>
        </div>
    </div>
  )
}

export default Destinations