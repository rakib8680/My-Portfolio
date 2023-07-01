import React from 'react';
import AOS from 'aos';
AOS.init();
import myself from '../../assets/myPhoto3.png'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaStripe, FaBootstrap, } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss, SiDaisyui, SiVercel } from 'react-icons/si'

const AboutMe = () => {
    return (
        <div className='pb-40' >
            <h1 className='text-4xl text-indigo-200 text-center'>About Me</h1>

            <div className='divider w-2/12 bg-[#97a5ff] h-1 rounded-full mx-auto '></div>

            <div className='container mx-auto  flex flex-col-reverse md:flex-row items-center justify-center gap-60 pt-20' >
                <div className='  bg-[#97a5ff] w-fit fancy-boarder2'
                    data-aos="fade-left"
                    data-aos-duration="1500"
                   >
                    <img src={myself} className='w-96 fancy-boarder2 relative top-5 left-5' />
                </div>
                <div className='text-indigo-200  md:w-1/2 w-[340px]' >
                    <div className=' backdrop-blur-md bg-blue-600 bg-opacity-20 p-5 text-base' data-aos="fade-left"
                    data-aos-duration="1500">
                        <h1 className=' font-mono '>
                            I'm <span className='font-bold text-sm'>Rakib</span>, a 20 year old <span className='font-bold text-sm'>Front-End Developer</span> with 1+ years of experience. I work with Javascript and its endless list of frameworks, primarily with <span className='font-bold text-sm'>React.js, Nodejs, and Express.js</span> .
                        </h1>
                        <br />
                        <h1 className=' font-mono '>
                            My main experience is in front-end development but I also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences.
                        </h1>
                        <br />
                        <h1 className=' font-mono '>
                            When I'm not coding, I love to binge-watch pop culture stuff. I also love to watch anime and create sketches. Even though I'm not very good, it does help my creative side when I'm building websites.
                        </h1>
                    </div>
                    <div>
                        <div className='divider divide-red-400 pt-10 pb-14 h-1 rounded-full text-2xl  mx-auto'>My Stack</div>
                        <div className=' md:flex gap-5 grid grid-cols-6'>
                            <FaHtml5 size={10} className="!w-[45px]  !h-[45px] neonText2  p-2"
                                data-aos="fade-left"
                                offset={0}
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="1000"
                            />

                            <FaCss3Alt size={10} className="!w-[45px]  !h-[45px] neonText2  p-2"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="1100"
                            />

                            <FaJs size={10} className="!w-[45px]  !h-[45px] neonText2  p-2"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="1200"
                            />
                            <FaReact size={10} className="!w-[45px]  !h-[45px] neonText2  p-2"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="1300"
                            />

                            <FaNode size={10} className="!w-[45px]  !h-[45px] neonText2  p-2"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="1400"
                            />

                            <FaBootstrap size={10} className="!w-[45px]  !h-[45px] neonText2  p-2"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="1500"
                            />

                            <SiTailwindcss size={10} className="!w-[45px]  !h-[45px] neonText2  p-2"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="1600"
                            />

                            <SiDaisyui size={10} className="!w-[45px]  !h-[45px] neonText2  p-2"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="1700"
                            />

                            <SiMongodb size={10} className="!w-[45px]  !h-[45px] neonText2  p-2"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="1800"
                            />

                            <SiFirebase size={10} className="!w-[45px]  !h-[45px] neonText2  p-2"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="1900"
                            />

                            <SiVercel size={10} className="!w-[45px]  !h-[45px] neonText2  p-2"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="2000"
                            />

                            <FaStripe size={10} className="!w-[45px]  !h-[45px] neonText2  p-2"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="2100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;