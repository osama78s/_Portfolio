import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from 'swiper/modules'
import { RxArrowTopRight } from 'react-icons/rx'
import '../Home/home.css'
import { products } from './data'
import './Swiper.css'

const SwiperCom = () => {
    return (
        <div className='bg-section pt-[100px] pb-[50px] font-primary' id='friendly'>
            <div className="text-center mb-10 lg:mb-20">
                <p className='text-primary text-[12px] sm:text-sm md:text-base'>OUR FANTASTIC ENVATO CUSTOMERS REVIEWS</p>
                <h1 className='text-heading text-[35px] sm:text-[50px] md:text-[70px] font-bold'>Customer Feedback</h1>
            </div>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    }

                }}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className='max-w-[95%]'
            >
                {products.map((product) => (
                    <SwiperSlide key={product.name} className='mb-20'>
                        <div className='max-h-[500px] shadow-a bg-primary '>
                            <div className="card p-10 rounded-md bg-card  hover:bg-cardLi h-full">
                                <div className='transform hover:translate-y-[-10px] transition-all duration-300 font-secondary'>

                                    <div className='flex gap-2'>
                                        <img src={product.logo} alt="logo" />
                                        <div>
                                            <span className='block text-white font-[600]'>{product.name}</span>
                                            <span className='text-primary'>{product.email}</span>
                                        </div>
                                    </div>
                                    <div className='mt-8'>
                                        <h1 className='text-white font-[500]'>{product.title}</h1>
                                        <p className='text-p mt-4 mb-8 leading-[1.6] '>{product.subTitle}</p>
                                        <img className='w-[150px] max-w-full' src={product.rating} alt="Raing" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default SwiperCom