"use client"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import React, { useRef, useEffect } from 'react'

interface AnimatedNumberProps {
    value: number;
}
const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInview = useInView(ref, { once: true })

    useEffect(() => {
        if (isInview) {
            motionValue.set(value)
        }

    }, [isInview, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [])

    return <span ref={ref}></span>
}
export default AnimatedNumber