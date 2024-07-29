import React from 'react'
import Navbar from './Header/Navbar/Navbar'
import ContentHome from './Hero/ContentHome/ContentHome'
import './home.css'
import NavMedia from './Header/Navbar/NavMedia'
import logo from '../../assets/bg-image-1.jpg'

const Home = () => {
  return (
    <div className='home relative z-10' id='home'>
        <Navbar/>
        <ContentHome/>
        <div className={`image min-h-[230vh] sm:min-h-[230vh] md:min-h-[200vh] lg:min-h-[170vh]  bg-cover bg-center inset-0 z-0 bg-fixed `}
          style={{ backgroundImage: `url(${logo})` }}
        />
        <NavMedia />

    </div>
  )
}

export default Home