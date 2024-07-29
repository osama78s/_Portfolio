import React from 'react'
import Typed from './Typed'
import Card from './Card'
import { faChartSimple, faMobile, faHeadphones } from '@fortawesome/free-solid-svg-icons'
import Slider from './Slider'

const ContentHome = () => {
  return (
    <>
      <div className='font-secondary font-bold absolute left-1/2 top-[8%] lg:top-[20%] transform -translate-x-1/2 text-heading z-[10] text-center'>
        <h1 className='text-[40px] sm:text-[60px] capitalize'>All in One <br /> Personal Portfolio for</h1>
        <Typed />
      </div>
      <div className='absolute top-[23%] sm:top-[30%] md:top-[25%] lg:top-[50%] grid sm:grid-cols-2 lg:grid-cols-3 gap-5 z-[10] px-4 sm:px-10 mt-32 sm:mt-28 md:mt-48 lg:mt-0'>

        <Card icon={faChartSimple} title={'Fast Performance'} subTitle={'Optimized for a smaller build size, faster dev compilation and dozens of other improvements.'} />
        <Card icon={faMobile} title={'Perfect Responsive'} subTitle={'Our Template is full Perfect for all device. You can visit our template all device easily.'} />
        <Card icon={faHeadphones} title={'Fast & Friendly Support'} subTitle={'We are provide 24 hours support for all clients.You can purchase without hesitation.'} />

      </div>
      <Slider/>
    </>
  )
}

export default ContentHome