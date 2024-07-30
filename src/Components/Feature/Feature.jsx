import React from 'react'
import Card from '../Home/Hero/ContentHome/Card'
import { faMobile, faTerminal, faCode, faMapPin, faMusic, faPenNib, faB, faBolt } from '@fortawesome/free-solid-svg-icons'
import TimeOffer from './TimeOffer'

const Feature = () => {
    return (
        <>
            <div className=' bg-section py-[100px] font-secondary' id='feature'>
                <div className="container">


                    <div className=" text-center mb-10 lg:mb-20">
                        <p className='text-primary text-sm sm:text-sm md:text-base'>OUR AMZ FEATURE</p>
                        <h1 className='text-heading text-[30px] sm:text-[50px] md:text-[70px] font-bold'>Awesome Feature</h1>
                    </div>
                    <div className='section grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 '>
                        <div className='shadow-a max-h-[500px] bg-primary'>
                            <Card icon={faMobile} title={'Perfect Responsive'} subTitle={'Our Template is full perfect for all device you can visit our te,plate all device easily'} />
                        </div>
                        <div className='shadow-a max-h-[450px] bg-primary'>
                            <Card icon={faCode} title={'React Js'} subTitle={'Our Template is full perfect for all device it is made by React js structure'} />
                        </div>
                        <div className='shadow-a max-h-[450px] bg-primary'>
                            <Card icon={faTerminal} title={'Well Documented Code'} subTitle={'The amz code is awesome well documented code. and its customization is very easily'} />
                        </div>
                        <div className='shadow-a max-h-[450px] bg-primary'>
                            <Card icon={faMapPin} title={'Tailwind Available'} subTitle={'The template has tailwind available for css. You can change css by tailwind'} />
                        </div>
                        <div className='shadow-a max-h-[450px] bg-primary'>
                            <Card icon={faBolt} title={'Fast Loading Speed'} subTitle={'The amz is faster loading speed. Amz create your theme so mush faster'} />
                        </div>
                        <div className='shadow-a max-h-[450px] bg-primary'>
                            <Card icon={faPenNib} title={'Modern Design'} subTitle={'The amz is a modern design for creative agency, personal portfolio etc...'} />
                        </div>
                        <div className='shadow-a max-h-[450px] bg-primary'>
                            <Card icon={faMusic} title={'24 support System'} subTitle={'We are provide 24 hours support for all clients. You can purchase without hesitation'} />
                        </div>
                        <div className='shadow-a max-h-[450px] bg-primary'>
                            <Card icon={faB} title={'Bootstrap Comfortable'} subTitle={'Bootstrap comfortable is available in amz. So layout changes is so Much easily'} />
                        </div>
                    </div>

                </div>
            </div>
            <TimeOffer />
        </>
    )
}

export default Feature