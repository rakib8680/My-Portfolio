import React from 'react';
import Wave from 'react-wavify'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAngleRight, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'
import profile from '../../assets/profile.png'
AOS.init();

const Banner = () => {
    return (
        <div className=''>
            <div className='h-[100vh] flex  items-center justify-between z-20 container mx-auto'>
                <div className='space-y-3 -mt-40 '>
                    <h1
                        className='text-3xl text-indigo-200 backdrop-blur-md bg-blue-600 bg-opacity-20 p-5 '
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        data-aos-delay="1500"
                        data-aos-easing="ease-in-out"> Welcome to my Portfolio ! 👋
                    </h1>
                    <div className='backdrop-blur-md bg-blue-600 bg-opacity-20 p-10 pb-40 content'>
                        <h1 className='text-8xl pt-7 neonText'
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out">Abdullah Al</h1>
                        <div className='absolute top-60 left-[225px]' data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out">
                            <h2 className='text-8xl font-bold'>Rakib</h2>
                            <h2 className='text-8xl font-bold'>Rakib</h2>
                        </div>
                    </div>
                    <div className='text-4xl text-indigo-200 font-mono backdrop-blur-md bg-blue-600 bg-opacity-20 p-5 flex items-center'
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="1500">
                        <FaAngleRight className='text-[#97a5ff]' />
                        <Typewriter words={['Full Stack Developer', 'Front-End Developer', 'UI/UX Enthusiast', 'React Developer']} loop={false} delaySpeed={2000} cursor={true} />
                    </div>

                </div>


                {/* profile  */}
                <div className='flex flex-col items-center'>
                    <div
                        data-aos="fade-in"
                        data-aos-duration="1500"
                        data-aos-delay="1000"
                        data-aos-easing="ease-in-out"
                        className='mask mask-squircle bg-blue-600 backdrop-blur-md bg-opacity-20 profile-shadow -mt-40'>
                        <img className='w-96' src={profile} />
                    </div>
                    <div className='flex gap-7 mt-5'>
                        <FaInstagram className='neonText2 rounded-full p-2' size={40}
                            data-aos="fade-down"
                            data-aos-duration="2000"
                            data-aos-delay="2000"
                            data-aos-easing="ease-in-out" />
                        <FaTwitter className='neonText2 rounded-full p-2' size={40}
                            data-aos="fade-down"
                            data-aos-duration="2000"
                            data-aos-delay="2200"
                            data-aos-easing="ease-in-out" />
                        <FaFacebook className='neonText2 rounded-full p-2' size={40}
                            data-aos="fade-down"
                            data-aos-duration="2000"
                            data-aos-delay="2400"
                            data-aos-easing="ease-in-out" />
                        <FaGithub className='neonText2 rounded-full p-2' size={40}
                            data-aos="fade-down"
                            data-aos-duration="2000"
                            data-aos-delay="2600"
                            data-aos-easing="ease-in-out" />
                        <FaLinkedin className='neonText2 rounded-full p-2' size={40}
                            data-aos="fade-down"
                            data-aos-duration="2000"
                            data-aos-delay="2800"
                            data-aos-easing="ease-in-out" />
                    </div>
                </div>
            </div>
            {/* <Wave
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                fill='#9ba9ff'
                className='h-96'
                paused={false}
                options={{
                    height: 10,
                    amplitude: 60,
                    speed: 0.15,
                    points: 3
                }}
            /> */}
        </div>
    );
};

export default Banner;