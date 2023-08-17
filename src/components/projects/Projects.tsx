"use client"
import React from 'react'
import AnimatedTxt from '../elements/AnimatedTxt'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';

const Projects = () => {
  const categories = [...Array.from(new Set(projectsData.map((s) => s.category)))]
  const [viewAll, setViewAll] = useState(false)
  const [category, setCategory] = useState(categories[0])
  const [filteredProjects, setFilteredProjects] = useState(projectsData)

  const filterProjects = (cat: string) => {
    setViewAll(false)
    setCategory(cat)
    setFilteredProjects(projectsData.filter((project) => project.category.toLowerCase() === cat.toLowerCase()));
  }

  useEffect(() => {
    filterProjects(categories[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main id="projects" className=' relative flex w-full flex-col items-center justify-center scroll-mt-28 min-h-screen'>
      <div className='inline-block z-0 p-8 md:px-28  pt-0 w-full' >
        <AnimatedTxt text='Projects done by me' className='lg:text-6xl text-5xl !text-center mb-3 ' />
      </div>
      <div className="overflow-x-auto scroll-hide w-full max-w-screen-sm mx-auto my-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
        {categories.map((c: string = "", i: number) => (
          <span key={i} onClick={() => filterProjects(c)} className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${category.toLowerCase() === c.toLowerCase() ? "bg-gradient-to-r from-gray-700 to-black text-white" : "hover:bg-gray-100 hover:dark:bg-grey-900"} cursor-pointer transition-all`}>
            {c}
          </span>
        ))}
      </div>
      <div>


        {filteredProjects.slice(0, viewAll ? filteredProjects.length : 6).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      {filteredProjects.length > 6
        &&
        <ViewAll scrollTo='projects' title={viewAll ? 'Okay, I got it' : 'View All'} handleClick={() => setViewAll(!viewAll)} />
      }

    </main >
  )
}

export default Projects


type MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export const ViewAll = ({ handleClick, title, scrollTo }: { handleClick: MouseEventHandler, title: string, scrollTo: string }) => {
  return (
    <>
      {/* <div className="bg-white w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div> */}
      <div className="text-center -translate-y-24">
        {title === 'View All' ?
          <button onClick={handleClick} className={`bg-black text-white px-5 ${title === 'View All' ? 'animate-bounce' : 'animate-none'} py-1.5 rounded-md hover:shadow-xl transition-all`}>
            {title}
          </button>
          :
          <Link
            to={scrollTo}
            className={`bg-black text-white px-5 ${title === 'View All' ? 'animate-bounce' : 'animate-none'} cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
            offset={-60}
            smooth={true}
            duration={500}
            // @ts-ignore
            onClick={() => handleClick()}
          >{title}</Link>
        }
      </div>
    </>
  )
}