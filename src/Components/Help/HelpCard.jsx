import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HelpCard = ({ icon, title, subTitle, button}) => {
    return (
        <div className=" max-h-[450px] rounded-md bg-card font-primary hover:bg-cardLi shadow-a">

            <div className='transform hover:translate-y-[-10px] transition-all duration-300 p-10 '>
                <FontAwesomeIcon icon={icon} className='text-primary text-[40px]' />
                <h1 className='mt-5 mb-3 text-heading text-[20px] sm:text-[25px]'>{title}</h1>
                <p className='text-p leading-[1.6]'>{subTitle}</p>
                <button className='shadow-a text-primary px-3 py-1 sm:px-5 sm:py-2 rounded-md mt-6 transform hover:translate-y-[-10px] transition-all duration-300'>{button}</button>
            </div>

        </div>
    )
}

export default HelpCard