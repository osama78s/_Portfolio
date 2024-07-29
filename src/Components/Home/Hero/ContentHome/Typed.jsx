import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Typed = () => {
  return (
    <div className="typewriter h-[100px] overflow-hidden mt-5">
    <h1 className='text-primary text-[35px] sm:text-[50px] whitespace-nowrap overflow-hidden'>
      <TypeAnimation
        sequence={[
          'Web Develober.',
          250,
          'Content Writer.',
          250,
          'Frontend.',
          250,
          'Ui & Ux.',
          250,
        ]}
        speed={30}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
      />
    </h1>
  </div>
  )
}

export default Typed