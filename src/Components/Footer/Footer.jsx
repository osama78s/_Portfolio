import React from 'react'
import './Footer.css'
const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <div className=' bg-section py-[20px] font-primary'>
            <div className="container px-0 md:px-[20px] text-center md:flex md:justify-between md:items-center">
                <span className='text-p text-sm sm:text-lg '>© <span>{date}</span> All rights reserved by Rainbow-Themes</span>
                <div className=" flex gap-4 justify-center mt-4">
                    <span className='bor text-p cursor-pointer hover:text-primary transition-all duration-300'>Docs</span>
                    <span className='bor text-p cursor-pointer hover:text-primary transition-all duration-300'>Support Center</span>
                </div>
            </div>
        </div>
    )
}

export default Footer