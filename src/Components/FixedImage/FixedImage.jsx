import React from 'react'
import logo from '../../assets/FixedImage.jpeg'

const FixedImage = () => {
  return (
    <div style={{ backgroundImage: `url(${logo})` }} className='min-h-[750px] bg-fixed bg-no-repeat bg-cover bg-center '/>
  )
}

export default FixedImage