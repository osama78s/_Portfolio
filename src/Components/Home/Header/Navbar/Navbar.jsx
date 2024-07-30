import React, { useContext, useEffect, useState } from 'react'
import AvatarCom from './Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Nav } from './ContextNav';


const Navbar = () => {

  const [fixed, setFixed] = useState(false);
  const { handelList } = useContext(Nav)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 350) {
        setFixed(true)
      } else {
        setFixed(false)
      }
    })
  }, []);


  return (
    <div className={`${fixed ? 'fixed border-b border-b-nav h-[90px] bg-nav shadow-a backdrop-blur-[4px]' : 'absolute  border-b border-b-transparent'} transition-all duration-500 z-20 left-1/2 -translate-x-1/2 top-0 w-full py-7 flex items-center`}>
    <div className='flex items-center justify-between container'>
      <AvatarCom />
      <ul className='font-secondary text-white hidden lg:flex gap-5 items-center ms-auto hover:text-opacity-50 transition-all duration-100'>
        <li><a className='hover:text-white transition-all duration-300 uppercase text-[12px]' href="#home">view demo</a></li>
        <li><a className='hover:text-white transition-all duration-300 uppercase text-[12px]' href="#projects">Projects</a></li>
        <li><a className='hover:text-white transition-all duration-300 uppercase text-[12px]' href="#feature">Feature</a></li>
        <li><a className='hover:text-white transition-all duration-300 uppercase text-[12px]' href="#friendly">friendly support</a></li>
        <li><a className='hover:text-white transition-all duration-300 uppercase text-[12px]' href="#documentation">documentation</a></li>
        <li><a className='transform inline-block hover:translate-y-[-8px] py-3 px-5 rounded-md transition-all duration-300 uppercase text-[14px] bg-a shadow-a text-primary' href="https://www.facebook.com/profile.php?id=100067178573868" target='_blank'>purchase now</a></li>
      </ul>
      <FontAwesomeIcon className='cursor-pointer text-[25px] lg:hidden p-3 rounded-full text-primary shadow-icons bg-icons transform hover:scale-105 transition-all duration-300' icon={faList} onClick={handelList} />
    </div>
    </div>
  )
}

export default Navbar