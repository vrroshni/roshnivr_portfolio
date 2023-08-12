import React from 'react'
import AnimatedTxt from '../../components/AnimatedTxt'
import Image from 'next/image'
import ProfilePic from '../../../public/developer-pic-2.jpg';
import AnimatedNumber from '@/components/AnimatedNumber';




const About = () => {
    return (
        <main className='flex w-full flex-col items-center justify-center'>
            <div className='inline-block z-0 p-8 md:px-28  pt-0 w-full' >
                <AnimatedTxt text='Know more about me' className='  sm:text-[2.5rem]  md:!text-7xl lg:text-8xl !text-center mb-16  ' />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='xl:col-span-3 lg:col-span-4 flex flex-col items-start justify-start col-span-full sm:order-2 lg:order-1'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-black/75'>
                            About Me
                        </h2>
                        <p className=' text-sm lg:text-base lg:font-medium'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatem quod molestiae quidem sapiente, explicabo laudantium delectus repellendus ut asperiores ipsa qui saepe dolorem quaerat nisi fugiat aperiam ducimus? Iure.
                        </p>
                        <p className='my-4 text-sm lg:text-base lg:font-medium'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem, minus molestiae neque, fuga recusandae sint et dolore eum reiciendis alias cupiditate quasi dolor dolorem officiis nesciunt esse? Minus, similique?
                        </p>
                        <p className='my-4 text-sm lg:text-base lg:font-medium'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem, minus molestiae neque, fuga recusandae sint et dolore eum reiciendis alias cupiditate quasi dolor dolorem officiis nesciunt esse? Minus, similique?
                        </p>


                    </div>
                    <div className='sm:col-span-6  md:col-span-8 lg:col-span-4  relative h-max rounded-2xl border-2 border-solid border-black bg-white md:p-8 p-2 col-span-8 sm:order-1 lg:order-2 '>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black' />
                        <div className='w-auto  h-auto rounded-2xl '>
                            <Image src={ProfilePic} alt='Roshni V R' height={700} width={700} />
                        </div>
                    </div>
                    <div className=' col-span-full xl:col-span-2  flex xl:flex xl:flex-col  justify-around  md:items-end md:justify-between  sm:order-3 lg:order-3   '>
                        <div className='flex flex-col items-center lg:items-end justify-center'>
                            <span className='inline-block md:text-7xl text-5xl font-bold'>
                                <AnimatedNumber value={50} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-black/75'>Satisfied Clients</h2>
                        </div>
                        <div className='flex flex-col items-center lg:items-end justify-center'>
                            <span className='inline-block md:text-7xl text-5xl font-bold'>
                                <AnimatedNumber value={50} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-black/75'>Satisfied Clients</h2>
                        </div>
                        <div className='flex flex-col items-center lg:items-end justify-center '>
                            <span className='inline-block md:text-7xl text-5xl font-bold'>
                                <AnimatedNumber value={50} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-black/75'>Satisfied Clients</h2>
                        </div>

                    </div>

                </div>

            </div>


        </main >
    )
}

export default About


