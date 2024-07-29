import React, { useContext, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { Nav } from './ContextNav'

function NavMedia() {

  const { show, handelList } = useContext(Nav);

  const handelCheck = (e) => {
    if (e.target.classList.contains('ul')) {
      return;
    } else {
      handelList();
    }
  }

  return (
    <div onClick={handelCheck} className={` ${show ? 'navMedia navTrue' : 'hidden'} z-[1000]`}>
      <ul className='ul bg-navbg_light shadow-shadwo w-3/4 p-5 pb-2 h-fit absolute left-1/2 transform -translate-x-1/2 top-28  rounded-xl'>
        <ul className='ul flex items-center justify-between pb-5'>
          <li className=' font-semibold text-heading'>Navigation</li>
          <FontAwesomeIcon icon={faX} className='cursor-pointer text-neutral-500 transition-all duration-300 hover:text-primary' onClick={handelList} />
        </ul>
        <li className='text-p cursor-pointer hover:text-heading transition-all duration-300 font-medium mt-4 pb-1 block border-b border-b-navMedia'><a href="#home">View Demo</a></li>
        <li className='text-p cursor-pointer hover:text-heading transition-all duration-300 font-medium mt-4 pb-1 block border-b border-b-navMedia'><a href="#projects">Projects</a></li>
        <li className='text-p cursor-pointer hover:text-heading transition-all duration-300 font-medium mt-4 pb-1 block border-b border-b-navMedia'><a href="#feature">Feature</a></li>
        <li className='text-p cursor-pointer hover:text-heading transition-all duration-300 font-medium mt-4 pb-1 block border-b border-b-navMedia'><a href="#friendly">Friendly Support</a></li>
        <li className='text-p cursor-pointer hover:text-heading transition-all duration-300 font-medium mt-4 pb-1 block'><a href="#documentation">Documentation</a></li>
      </ul>
    </div>
  )
}

export default NavMedia