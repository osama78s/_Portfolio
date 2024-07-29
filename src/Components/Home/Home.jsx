import React from 'react'
import Navbar from './Header/Navbar/Navbar'
import ContentHome from './Hero/ContentHome/ContentHome'
import './home.css'
import NavMedia from './Header/Navbar/NavMedia'

const Home = () => {
  return (
    <div className='home relative z-10' id='home'>
        <Navbar/>
        <ContentHome/>
        <div className='image h-[260vh] sm:h-[230vh] md:h-[200vh] lg:h-[170vh] bg-photo bg-cover bg-center inset-0 z-0 bg-fixed '/>
        <NavMedia />

    </div>
  )
}

export default Home