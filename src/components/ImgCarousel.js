import React from 'react';
import '../styles/carousel.css';
import { Carousel } from 'react-responsive-carousel';
import Borabora from '../assets/borabora.jpg';
import Borabora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ImgCarousel = () => {
  return (
    <div name='carousel' className='container'>
        <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={Borabora} alt='/' />
            {/* <p className="legend">Borabora</p> */}
            </div>
            <div>
            <img src={Borabora2} alt='/' />
            {/* <p className="legend">Maldives</p> */}
        </div>
        <div>
        <img src={Maldives} alt='/' />
        {/* <p className="legend">Barbados</p> */}
        </div>
    </Carousel>
    </div>
    
  )
}

export default ImgCarousel