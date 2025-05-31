import React from 'react';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import Button from '../components/Button';
import '../styles/home.css'

export default function Home() {
  return (
    <div className='you-ok'>
        <Nav/>
        <Carousel/>
        <Button/>
    </div>
  )
}
