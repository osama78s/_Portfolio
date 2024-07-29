import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ icon, title, subTitle }) => {
    return (
        <div className="card p-10  sm:p-14 rounded-md bg-card font-primary hover:bg-cardLi h-full">
            <div className='transform hover:translate-y-[-10px] transition-all duration-300'>
                <FontAwesomeIcon icon={icon} className='text-primary text-[40px]' />
                <h1 className='mt-5 mb-3 text-heading text-[25px]'>{title}</h1>
                <p className='text-p leading-[1.6]'>{subTitle}</p>
            </div>
        </div>
    )
}

export default Card