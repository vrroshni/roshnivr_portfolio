'use client'
import React from 'react'
import { motion } from 'framer-motion';


const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,

        }
    }
}
const singleWord = {
    initial: {
        opacity: 0,
        y: 50,

    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,

        }
    }
}

interface AnimatedTxtProps {
    text: string;
    className?: string;
}
const AnimatedTxt: React.FC<AnimatedTxtProps> = ({ text, className }) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center md:justify-start   overflow-hidden'>
            <motion.h1
                className={`inline-block w-full text-dark  capitalize ${className}`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {text.split(" ").map((word, index) => (
                    <motion.span key={index + '-word'} className='inline-block' variants={singleWord}>
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default AnimatedTxt;
