import React from 'react';
import car from '../assets/car.png';
import '../styles/components/carousel.css'

export default function Carousel() {
  return (
    <div className='carousel'>
        <h1>You know what you are doing here. Do not fool yourself.</h1>
        <img src={car} alt="a car" id="car-image"/>
    </div>
  )
}
