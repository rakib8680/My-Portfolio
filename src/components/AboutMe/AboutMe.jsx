import React, { Profiler } from 'react';
import myself from '../../assets/myPhoto3.png'
import { FaHtml5,  FaCss3Alt, FaJs, FaReact, FaNode,FaStripe,FaBootstrap,  } from 'react-icons/fa';
import {SiMongodb, SiFirebase, SiTailwindcss, SiDaisyui, SiVercel} from 'react-icons/si'

const AboutMe = () => {
    return (
        <div className='pb-40' >
            <h1 className='text-4xl text-indigo-200 text-center'>About Me</h1>

            <div className='divider w-2/12 bg-[#97a5ff] h-1 rounded-full mx-auto '></div>

            <div className='container mx-auto  flex items-center justify-center gap-60 pt-20' >
                <div className='  bg-[#97a5ff] w-fit fancy-boarder2'>
                    <img src={myself} className='w-96 fancy-boarder2 relative top-5 left-5' />
                </div>
                <div className='text-indigo-200  w-1/2' >
                    <div className=' backdrop-blur-md bg-blue-600 bg-opacity-20 p-5 text-base'>
                        <h1 className=' font-mono '>
                            I'm Rakib, a 20 year old Full Stack Developer with 2+ years of experience. I work with Javascript and its endless list of frameworks, primarily with React.js, Next.js, Nodejs, and Gatsby.
                        </h1>
                        <br />
                        <h1 className=' font-mono '>
                            Occasionally, I work as a Freelance Web Developer where I deliver highly optimized websites to my clients and help them scale their businesses digitally. I also run a  YouTube channel  where I post web dev tutorials.
                        </h1>
                        <br />
                        <h1 className=' font-mono '>
                            When I'm not coding, I love to binge-watch pop culture stuff. I also love to play guitar and create sketches. Even though I'm not very good, it does help my creative side when I'm building websites.
                        </h1>
                    </div>
                    <div>
                        <div className='divider divide-red-400 pt-10 pb-14 h-1 rounded-full text-2xl  mx-auto'>My Stack</div>
                        <div className='flex gap-5'>
                            <FaHtml5  size={10} className="!w-[45px]  !h-[45px] neonText2  p-2" />
                            <FaCss3Alt  size={10} className="!w-[45px]  !h-[45px] neonText2  p-2" />
                            <FaJs  size={10} className="!w-[45px]  !h-[45px] neonText2  p-2" />
                            <FaReact  size={10} className="!w-[45px]  !h-[45px] neonText2  p-2" />
                            <FaNode  size={10} className="!w-[45px]  !h-[45px] neonText2  p-2" />
                            <FaBootstrap  size={10} className="!w-[45px]  !h-[45px] neonText2  p-2" />
                            <SiTailwindcss  size={10} className="!w-[45px]  !h-[45px] neonText2  p-2" />
                            <SiDaisyui  size={10} className="!w-[45px]  !h-[45px] neonText2  p-2" />
                            <SiMongodb  size={10} className="!w-[45px]  !h-[45px] neonText2  p-2" />
                            <SiFirebase  size={10} className="!w-[45px]  !h-[45px] neonText2  p-2" />
                            <SiVercel  size={10} className="!w-[45px]  !h-[45px] neonText2  p-2" />
                            <FaStripe  size={10} className="!w-[45px]  !h-[45px] neonText2  p-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;