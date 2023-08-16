"use client";
import React from 'react'
import AnimatedTxt from '../../components/AnimatedTxt'
import Image from 'next/image'
import AnimatedNumber from '@/components/AnimatedNumber';
import AppParticles from '@/components/AppParticles';
import ProfilePic from '../../../public/developer-pic-2.jpg';
import { motion } from "framer-motion";

const About = () => {
    return (
        <main className=' relative flex w-full flex-col items-center justify-center'>
            <AppParticles />
            <div className='inline-block z-0 p-8 md:px-28  pt-0 w-full' >
                <AnimatedTxt text='Know more about me' className='lg:text-7xl text-5xl !text-center mb-3 ' />
                <div className=' w-full  gap-16 flex flex-col'>
                    <div className='flex flex-col items-center justify-center md:px-10 '>
                        {/* <h3 className='mb-4 text-xl font-bold uppercase text-black/75'>
                            About Me
                        </h3> */}
                        <div className="flex items-center justify-center mb-4">
                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        type: "tween",
                                        duration: 0.2,
                                    }}
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                                        alt="Ricardo portrait"
                                        width="192"
                                        height="192"
                                        quality="95"
                                        priority={true}
                                        className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                                    />
                                </motion.div>

                                <motion.span
                                    className="absolute bottom-0 right-0 text-4xl"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 125,
                                        delay: 0.1,
                                        duration: 0.7,
                                    }}
                                >
                                    👋
                                </motion.span>
                            </div>
                        </div>
                        <p className=' text-base font-light text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatem quod molestiae quidem sapiente, explicabo laudantium delectus repellendus ut asperiores ipsa qui saepe dolorem quaerat nisi fugiat aperiam ducimus? Iure.

                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem, minus molestiae neque, fuga recusandae sint et dolore eum reiciendis alias cupiditate quasi dolor dolorem officiis nesciunt esse? Minus, similique?

                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem, minus molestiae neque, fuga recusandae sint et dolore eum reiciendis alias cupiditate quasi dolor dolorem officiis nesciunt esse? Minus, similique?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatem quod molestiae quidem sapiente, explicabo laudantium delectus repellendus ut asperiores ipsa qui saepe dolorem quaerat nisi fugiat aperiam ducimus? Iure.
                        </p>


                    </div>

                    <div className=' flex  items-center justify-evenly md:px-16  '>
                        <div className='flex flex-col items-start lg:items-end justify-center'>
                            <span className='inline-block lg:text-7xl text-5xl font-bold'>
                                <AnimatedNumber value={50} />+
                            </span>
                            <h2 className=' text-base md:text-xl font-medium capitalize text-black/75'>Satisfied Clients</h2>
                        </div>
                        <div className='flex flex-col items-start lg:items-end justify-center'>
                            <span className='inline-block lg:text-7xl text-5xl font-bold'>
                                <AnimatedNumber value={50} />+
                            </span>
                            <h2 className=' text-base md:text-xl font-medium capitalize text-black/75'>Satisfied Clients</h2>
                        </div>
                        <div className='flex flex-col items-start lg:items-end justify-center '>
                            <span className='inline-block lg:text-7xl text-5xl font-bold'>
                                <AnimatedNumber value={50} />+
                            </span>
                            <h2 className=' text-base md:text-xl font-medium capitalize text-black/75'>Satisfied Clients</h2>
                        </div>

                    </div>


                </div>

            </div>


        </main >
    )
}

export default About


