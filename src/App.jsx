import React, { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import ProjectsSection from './Components/ProjectsSection/ProjectsSection';
import Feature from './Components/Feature/Feature';
import FixedImage from './Components/FixedImage/FixedImage';
import SwiperCom from './Components/Swiper/Swiper';
import TimeOffer from './Components/Feature/TimeOffer';
import Help from './Components/Help/Help';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  
  const [show, setshow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY >= 400 ? setshow(true) : setshow(false);
    })
  }, [])

  return (
    <div className='relative'>
      <Home />
      <ProjectsSection/>
      <Feature/>
      <FixedImage/>
      <SwiperCom/>
      <TimeOffer/>
      <Help/>
      <Contact/>
      <Footer/>
      <FontAwesomeIcon onClick={() => scrollTo({ top:0 , behavior: 'smooth' })} className={` ${show ? 'fixed right-[50px] bottom-[30px] z-[20]' : 'hidden'}  bg-icons w-[15px] h-[15px] p-4 rounded-full text-primary shadow-icons cursor-pointer transform hover:scale-105 transition-all duration-300`} icon={faArrowUp} />
    </div>
  );
};

export default App;
