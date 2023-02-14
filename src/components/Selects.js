import React from 'react';
import '../styles/selects.css';
import Borabora from '../assets/borabora.jpg';
import Borabora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';
import SelectsImg from './SelectsImg';


const Selects = () => {
  return (
    <div name='views' className='selects'>
        <div className='container'>
        <SelectsImg bgImg={Borabora} text='Bora Bora'  />
        <SelectsImg bgImg={Borabora2} text='Emerald Bay'  />
        <SelectsImg bgImg={Maldives} text='Maldives'  />
        <SelectsImg bgImg={Maldives2} text='Grenada'  />
        <SelectsImg bgImg={Maldives3} text='Barbados'  />
        <SelectsImg bgImg={KeyWest} text='KeyWest'  />
        </div>
    </div>
  )
}

export default Selects