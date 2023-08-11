
import AnimatedTxt from '@/components/AnimatedTxt'
import Image from 'next/image'
import ProfilePic from '../../public/developer-pic-1.png';
import Link from 'next/link';
import { BsArrowRight, BsFillArrowDownCircleFill, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import AppParticles from '@/components/AppParticles';
import HireMe from '@/components/HireMe';


export default function Home() {
  return (
    <main className=' relative flex items-center text-dark w-full h-auto md:pt-4'>
      <AppParticles />
      <div className="inline-block z-0 bg-light p-8 md:p-4 pt-0 w-full">

        <div className='flex flex-col md:flex-row items-center justify-between w-full'>

          <div className="w-full md:w-1/2">
            <Image src={ProfilePic}
              width={700}
              height={700}
              alt="Picture of the author" />
          </div>
          <div className="w-full mt-0 md:mt-4 md:w-1/2 flex flex-col items-center md:items-start self-center md:self-start px-4 md:px-0">
            <AnimatedTxt text='Turning Vision into Reality with code and Design' className='!text-4xl md:!text-6xl !text-center md:!text-left' />
            <p className='my-4 text-base md:text-lg font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aut tempore iste magnam sed eveniet non eum mollitia excepturi dolor! Obcaecati, facere hic impedit nihil atque placeat ducimus cumque vel.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aut tempore iste magnam sed eveniet non eum mollitia excepturi dolor! Obcaecati, facere hic impedit nihil atque placeat ducimus cumque vel.
            </p>
            <div className='flex items-center justify-center md:items-start mt-2'>
              <Link href={""} target='_blank' className='flex items-center bg-black text-white p-2 px-4 rounded-lg text-lg font-semibold hover:text-black hover:bg-white border border-solid border-transparent hover:border-black' download={true}>
                Resume <BsFillArrowDownCircleFill className="w-6 ml-1" />
              </Link>
              <Link href="mailto:vr7roshni@gmail.com" target='_blank' className='ml-2 mt-2 text-lg font-medium capitalize text-dark underline '>Contact</Link>
              <a className="bg-white mt-2 md:mt-0 ml-0 md:ml-3 p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack " href="https://linkedin.com" target="_blank">
                <BsLinkedin />
              </a>

              <a className="bg-white mt-2 md:mt-0 ml-0 md:ml-3 p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack " href="https://github.com" target="_blank">
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
      <HireMe className={"bottom-4 left-4 hidden  md:block"} />
    </main>

  )
}
