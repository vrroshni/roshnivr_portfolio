import React from 'react'
import AnimatedTxt from '../elements/AnimatedTxt'
import Propic from './Propic'
import AnimatedNumber from '../elements/AnimatedNumber'

const About = () => {
  return (
    <main  id="about" className=' relative flex w-full flex-col items-center justify-center'>
    <div className='inline-block z-0 p-8 md:px-28  pt-0 w-full' >
        <AnimatedTxt  text='Know more about me' className='lg:text-5xl text-4xl !text-center mb-9  ' />
        <div className=' w-full  gap-16 flex flex-col'>
            <div className='flex flex-col items-center justify-center md:px-10 '>
                {/* <h3 className='mb-4 text-xl font-bold uppercase text-black/75'>
                    About Me
                </h3> */}
                {/* <Propic /> */}
                <p className=' text-base md:text-lg font-light text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatem quod molestiae quidem sapiente, explicabo laudantium delectus repellendus ut asperiores ipsa qui saepe dolorem quaerat nisi fugiat aperiam ducimus? Iure.

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem, minus molestiae neque, fuga recusandae sint et dolore eum reiciendis alias cupiditate quasi dolor dolorem officiis nesciunt esse? Minus, similique?

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem, minus molestiae neque, fuga recusandae sint et dolore eum reiciendis alias cupiditate quasi dolor dolorem officiis nesciunt esse? Minus, similique?
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