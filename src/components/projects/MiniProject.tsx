"use client";

import { useRef } from "react";
import { projectsData } from "@/app/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaVideo } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"


type ProjectProps = (typeof projectsData)[number];

export default function MiniProject({
    title,
    description,
    tags,
    imageUrl,
    links
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 "
        >
            <div className='shadow-md shadow-gray-600 rounded-lg hover:bg-gray-300 transition flex flex-col h-full'>
                <Image src={imageUrl} alt="" className='rounded-md duration-200 hover:scale-105   transition-all  ' />
                <p className='text-center font-semibold text-lg mt-3'>{title}</p>
                <p className='text-center mt-3'>{description}</p>
                <ul className="flex flex-wrap items-start justify-center just mt-4 p-2 gap-2 sm:mt-auto">
                    {tags.map((tag, index) => (
                        <li
                            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                            key={index}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
                <div className='flex items-center justify-center'>
                    {links.visit.trim() &&
                        <a href={links.visit} target="_blank" className="bg-gray-300  m-4 text-black p-2 rounded-full hover:bg-black hover:text-white transition-all hover:scale-125 cursor-pointer   hover:shadow-xl">
                            <BiLinkExternal size={20} />
                        </a>
                    }
                    {links.code.trim() &&
                        <a href={links.code} target="_blank" className="bg-gray-200  m-4 text-black p-2 rounded-full hover:bg-black hover:text-white transition-all hover:scale-125 cursor-pointer   hover:shadow-xl">
                            <FaGithub size={20} />
                        </a>
                    }
                    {links.video.trim() &&
                        <a href={links.video} target="_blank" className="bg-gray-200  m-4 text-black p-2 rounded-full hover:bg-black hover:text-white transition-all hover:scale-125 cursor-pointer   hover:shadow-xl">
                            <FaVideo size={20} />
                        </a>
                    }
                </div>
            </div>
        </motion.div>
    );
}
