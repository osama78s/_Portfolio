import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { products } from './Data';
import './Products.css'

function ProjectsContent() {

    const [arr, setArr] = useState(products);
    const [changeActive, setChangeActive] = useState('all');


    return (
        <>
            <div className='bg-section py-[100px] font-primary' id='projects'>
                <div className='projet-box container md:flex items-start gap-8'>
                    <ul className="flex justify-center flex-wrap md:flex-nowrap md:flex-col gap-5 md:gap-8 text-center mb-8 md:mb-0">
                        <li onClick={() => {
                            setChangeActive('all');

                            setArr(products)
                        }}>
                            <span className={`${changeActive === 'all' ? 'active border border-primary' : ''}  bg-icons text-white  block w-[170px]  py-2 px-4 rounded-md cursor-pointer`}>All Projects</span>
                        </li>
                        <li onClick={() => {
                            setChangeActive('css');

                            const newArr = products.filter(item => item.catergory.includes('css'));

                            setArr(newArr)

                        }}>
                            <span className={`${changeActive === 'css' ? 'active border border-primary' : ''} bg-icons  py-2 px-4  text-white block w-[170px]  rounded-md cursor-pointer`}>Html & Css</span>
                        </li>
                        <li onClick={() => {

                            setChangeActive('js');

                            const newArr = products.filter(item => item.catergory.includes('javascript'));

                            setArr(newArr);
                        }}>
                            <span className={`${changeActive === 'js' ? 'active border border-primary' : ''} bg-icons text-white block w-[170px]  py-2 px-4 rounded-md cursor-pointer`}>Javascript</span>
                        </li>
                        <li onClick={() => {
                            setChangeActive('react');

                            const newArr = products.filter(item => item.catergory.includes('react'));

                            setArr(newArr)

                        }}>
                            <span className={`${changeActive === 'react' ? 'active border border-primary' : ''} bg-icons text-white block w-[170px]   py-2 px-4 rounded-md cursor-pointer`}>React & Tailwind</span>
                        </li>
                        <li onClick={() => {
                            setChangeActive('dark');

                            const newArr = products.filter(item => item.catergory.includes('dark'));

                            setArr(newArr)

                        }}>
                            <span className={`${changeActive === 'dark' ? 'active' : ''} bg-icons text-white block w-[170px] py-2 px-4 rounded-md cursor-pointer`}>Dark & Light</span>
                        </li>
                    </ul>
                    <div className="flex flex-wrap gap-x-3 gap-y-6 justify-center">
                        {arr.map((product) => {
                            return (
                                <motion.div key={product.path} className="cards rounded-tl-md rounded-tr-md border  cursor-pointer transition-all duration-300"
                                    initial={{ transform: 'scale(0)' }}
                                    animate={{ transform: 'scale(1)' }}
                                    transition={{ damping: 20, type: 'spring', stiffness: 80 }}
                                >
                                    <img src={product.src} className='max-w-full w-80 rounded-tl-md rounded-tr-md' />
                                    <div className="content w-80 pt-2 p-3 bg-gradient-to-t dark:from-linear-dark1 dark:to-linear-dark1">
                                        <h1 className='mt-3 text-white text-xl'>{product.title}</h1>
                                        <p className='mt-3 text-p_card tracking-wide leading-6 text-sm '>{product.des}</p>
                                        <div className="flex items-center justify-between mt-5  ">
                                            <div className="flex gap-4 items-center">
                                                <a href={product.path} target='blanck'><FontAwesomeIcon className='text-p_card' icon={faLink} /></a>
                                            </div>
                                            <a href={product.path} target='blanck' className='flex items-center gap-3 text-primary'>More <FontAwesomeIcon className='link-animation mt-1' icon={faArrowRight} /></a>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </>
    );
}

export default ProjectsContent;

