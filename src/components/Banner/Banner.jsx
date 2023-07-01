import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAngleRight, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'
import profile from '../../assets/profile.png'
import { Button } from 'react-scroll/modules';
AOS.init();

const Banner = () => {
    return (
        <div className=''>
            <div className=' mt-60 md:mt-0 md:h-[100vh] md:flex  items-center justify-between  container mx-auto'>
                <div className='space-y-3 -mt-40 '>
                    <h1
                        className='md:text-3xl text-lg text-center md:text-left text-indigo-200 backdrop-blur-md bg-blue-600 bg-opacity-20 p-5 '
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        data-aos-delay="1500"
                        data-aos-easing="ease-in-out"> Welcome to my Portfolio ! 👋
                    </h1>
                    <div className='backdrop-blur-md bg-blue-600 bg-opacity-20  p-10 pb-40 content'>
                        <h1 className=' md:text-8xl text-5xl  pt-7 neonText'
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out">Abdullah Al</h1>
                        <div className='absolute md:top-60 top-44 md:left-[225px] left-[180px] ' data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out">
                            <h2 className='md:text-9xl text-8xl font-bold'>Rakib</h2>
                            <h2 className='md:text-9xl text-8xl  font-bold'>Rakib</h2>
                        </div>
                    </div>
                    <div className=' text-lg md:text-4xl text-indigo-200 font-mono backdrop-blur-md bg-blue-600 bg-opacity-20 p-5 flex items-center'
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="1500">
                        <FaAngleRight className='text-[#97a5ff]' />
                        <Typewriter words={['Full Stack Developer', 'Front-End Developer', 'UI/UX Enthusiast', 'React Developer']} loop={false} delaySpeed={2000} cursor={true} />
                    </div>
                    <div className='flex flex-col md:flex-row  justify-start md:gap-10 gap-5 pt-5 px-4 md:px-0'
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="1800">
                        <button className='glowing-btn py-3 md:py-0'>Hire Me</button>
                        <button className='glowing-btn  py-3 md:py-0'>My Resume</button>
                    </div>
                </div>

                {/* profile  */}
                <div className='flex flex-col items-center mt-56 p-4 md:mt-0 md:p-0 mb-36'>
                    <div
                        data-aos="fade-in"
                        data-aos-duration="1500"
                        data-aos-delay="1000"
                        data-aos-easing="ease-in-out"
                        className='mask mask-squircle bg-blue-600 backdrop-blur-md bg-opacity-20 profile-shadow -mt-40'>
                        <img className='w-96' src={profile} />
                    </div>
                    <div className='flex gap-7 mt-5'>
                        <a href="https://www.instagram.com/rakib_8680_/">
                            <FaInstagram className='neonText2  rounded-full p-2' size={40}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                                data-aos-delay="2000"
                                data-aos-easing="ease-in-out" />
                        </a>
                        <a href="https://www.twitter.com/rakib8680">
                            <FaTwitter className='neonText2 rounded-full p-2' size={40}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                                data-aos-delay="2200"
                                data-aos-easing="ease-in-out" />
                        </a>
                        <a href="https://www.twitter.com/rakib8680">
                            <FaFacebook className='neonText2 rounded-full p-2' size={40}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                                data-aos-delay="2400"
                                data-aos-easing="ease-in-out" />
                        </a>
                        <a href="https://github.com/rakib8680">
                            <FaGithub className='neonText2 rounded-full p-2' size={40}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                                data-aos-delay="2600"
                                data-aos-easing="ease-in-out" />
                        </a>
                        <a href="https://www.linkedin.com/in/rakib-khan-91354a278/">
                            <FaLinkedin className='neonText2 rounded-full p-2' size={40}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                                data-aos-delay="2800"
                                data-aos-easing="ease-in-out" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;