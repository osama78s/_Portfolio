import React from 'react'
import logo from '../../assets/me.png'

const Contact = () => {
    return (
        <>
            <div className=' bg-section py-[50px] font-secondary'>
                <div className="container flex flex-col items-center justify-center px-[20px] text-center ">
                    <img className='w-[80px] md:w-[90px]  p-[3px] border-2 border-nav rounded-full' src={logo} alt='Logo' />
                    <p className='text-primary mt-8 text-[12px] sm:text-[14px]'>PURCHASE THE AMZ AND MAKE YOUR SITE SUPER FASTER AND EASY.</p>
                    <h1 className='text-heading text-[30px] md:text-[60px] lg:text-[70px] font-bold capitalize my-2'>Let's go to Purchase</h1>
                    <p className='text-p text-sm sm:text-lg mb-10'>& Make yourself known to the world</p>
                    <button className='px-5 py-3 shadow-a rounded-md text-primary transform hover:-translate-y-[10px] transition-all duration-300'><a href="https://www.facebook.com/profile.php?id=100067178573868" target='_blank'>Purchase Now</a></button>
                </div>
            </div>
            <div className="divider" />
        </>
    )
}

export default Contact