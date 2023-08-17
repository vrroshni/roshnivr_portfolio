"use client";

import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../../lib/data";
import AnimatedTxt from '../elements/AnimatedTxt'


export default function Experience() {
    const theme = 'light'
    return (
        <main className=' relative flex w-full flex-col items-center justify-center'>
            <div className='inline-block z-0 p-8 md:px-28  pt-0 w-full' >
                <AnimatedTxt text='My Experiences' className='lg:text-6xl text-5xl !text-center mb-9 ' />
                <VerticalTimeline lineColor="">
                    {experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    background:
                                        theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                    boxShadow: "none",
                                    border: "1px solid rgba(0, 0, 0, 0.05)",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem",
                                }}
                                contentArrowStyle={{
                                    borderRight:
                                        theme === "light"
                                            ? "0.4rem solid #9ca3af"
                                            : "0.4rem solid rgba(255, 255, 255, 0.5)",
                                }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{
                                    background:
                                        theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                    fontSize: "1.5rem",
                                }}
                            >
                                <h3 className="font-semibold capitalize">{item.title}</h3>
                                <p className="font-normal !mt-0">{item.location}</p>
                                <p className="!mt-1 !font-normal text-gray-700 ">
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))}
                </VerticalTimeline>

            </div>


        </main >

    );
}