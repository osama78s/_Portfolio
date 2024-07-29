import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const TimeOffer = () => {
  return (
    <div className='bg-cardLi py-[20px] font-primary'>
        <div className="md:container flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className='text-white rounded-full bg-primary px-2 text-[10px] tracking-wider py-3'>Limited Time Offer</span>
            <span className='text-p text-[14px]'>Intro Price. Get AMZ for Big Sale-95% off.</span>
            <a className='text-heading flex items-center justify-between gap-3 hover:text-primary transition-all duration-300 ' href="#" target='_blank'>Purchase Now <FontAwesomeIcon className='mt-1 link-animation' icon={faArrowRight} /></a>
        </div>
    </div>
  )
}

export default TimeOffer