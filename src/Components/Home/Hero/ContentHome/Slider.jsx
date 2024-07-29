import React from 'react'
import Marquee from 'react-fast-marquee'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

// import img1 from './assets/image 10.jpg';
// import img2 from './assets/laptob 1.jpg';
// import img3 from './assets/laptob 2.jpg';
// import img4 from './assets/laptob 3.jpg';
// import img5 from './assets/laptob 4.jpg';
// import img6 from './assets/laptob 5.jpg';
// import img7 from './assets/laptob 6..jpg';
// import img8 from './assets/laptob 7.jpg';
// import img9 from './assets/laptob 8.jpg';
// import img10 from './assets/laptob 9.jpg';

const Slider = () => {
    return (
        <div className='bg-cardLi absolute bottom-0 left-0 w-full py-[25px] text-heading z-10 font-primary'>
            <Marquee pauseOnHover={true}>
                <div className='image_wrapper flex items-center'>
                    <FontAwesomeIcon className='bg-check w-[14px] h-[14px] mr-[10px] flex items-center justify-center rounded-full text-white p-1' icon={faCheck} />
                    <h1 className='text-[18px]'>It’s Super Fast</h1>
                </div>
                <div className='image_wrapper'>
                    <div className='image_wrapper flex items-center'>

                        <FontAwesomeIcon className='bg-check w-[14px] h-[14px] mr-[10px] flex items-center justify-center rounded-full text-white p-1' icon={faCheck} />

                        <h1 className='text-[18px]'>One Page & Multi-Page Template</h1>
                    </div>
                </div>
                <div className='image_wrapper'>
                    <div className='image_wrapper flex items-center'>

                        <FontAwesomeIcon className='bg-check w-[14px] h-[14px] mr-[10px] flex items-center justify-center rounded-full text-white p-1' icon={faCheck} />

                        <h1 className='text-[18px]'>30+ Custom Elements</h1>
                    </div>
                </div>
                <div className='image_wrapper'>
                    <div className='image_wrapper flex items-center'>

                        <FontAwesomeIcon className='bg-check w-[14px] h-[14px] mr-[10px] flex items-center justify-center rounded-full text-white p-1' icon={faCheck} />

                        <h1 className='text-[18px]'>High Quality Support</h1>
                    </div>
                </div>
                <div className='image_wrapper'>
                    <div className='image_wrapper flex items-center'>

                        <FontAwesomeIcon className='bg-check w-[14px] h-[14px] mr-[10px] flex items-center justify-center rounded-full text-white p-1' icon={faCheck} />

                        <h1 className='text-[18px]'>Fully Customizable</h1>
                    </div>
                </div>
                <div className='image_wrapper'>
                    <div className='image_wrapper flex items-center'>

                        <FontAwesomeIcon className='bg-check w-[14px] h-[14px] mr-[10px] flex items-center justify-center rounded-full text-white p-1' icon={faCheck} />

                        <h1 className='text-[18px]'>Easy Lifetime Update</h1>
                    </div>
                </div>
                <div className='image_wrapper'>
                    <div className='image_wrapper flex items-center'>

                        <FontAwesomeIcon className='bg-check w-[14px] h-[14px] mr-[10px] flex items-center justify-center rounded-full text-white p-1' icon={faCheck} />

                        <h1 className='text-[18px]'>Responsive & Mobile Friendly</h1>
                    </div>
                </div>
            </Marquee>
        </div>
    )
}

export default Slider