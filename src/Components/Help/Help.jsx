import React from 'react'
import groupImage from '../../assets/group-image.png'
import AccordionCom from './Acoordion'
import { faMobile, faHeadphones } from '@fortawesome/free-solid-svg-icons'
import HelpCard from './HelpCard'

const Help = () => {
    return (
        <>
            <div className=' bg-section py-[100px] font-secondary'  id='documentation'>
                <div className="container px-[20px] md:px-[50px] flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between">

                    <div className='lg:basis-[65%]'>
                        <div className="mb-10 font-secondary">
                            <img src={groupImage} alt="Group Image" />
                            <p className='text-primary mt-9 text-sm md:text-md'>CHECK OUT OUR FAQ SECTION TO SEE IF WE CAN HELP.</p>
                            <h1 className='text-heading text-[40px] mt-4 md:mt-0 md:text-[60px] font-bold'>Do you have any Question</h1>
                        </div>
                        <AccordionCom />
                    </div>

                    <div className="flex flex-col gap-8 justify-center font-primary lg:basis-[30%]">
                        <HelpCard icon={faMobile} title={'Online Documentation'} subTitle={'Well organized and up to date'} button={'Online Documentation'} />
                        <HelpCard icon={faHeadphones} title={'Dedicated Support'} subTitle={'Need support ? Submit a ticket. We will be happy to assist you.'} button={'Get Support'} />
                    </div>

                </div>
            </div>
            <div className="divider"></div>
        </>
    )
}

export default Help