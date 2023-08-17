"use client";
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'

const Propic = () => {
  return (
    <div className="flex items-center justify-center mb-4 transition hover:scale-[1.15]">
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
                quality="100"
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
  )
}

export default Propic
