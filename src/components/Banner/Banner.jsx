import React from 'react';
import Wave from 'react-wavify'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter'
import profile from '../../assets/profile.png'
AOS.init();

const Banner = () => {
    return (
        <div>
            <div className='h-[100vh] flex  items-center justify-between z-20 container mx-auto'>
                <div className='space-y-3 -mt-40'>
                    <h1
                        className='text-3xl  backdrop-blur-md bg-blue-600 bg-opacity-10 p-5 '
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"> Welcome to my Portfolio ! 👋
                    </h1>
                    <div className='backdrop-blur-md bg-blue-600 bg-opacity-10 p-10'>
                        <h1 className='text-8xl pt-7 font-'
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out">Abdullah Al</h1>
                        <h2 className='text-8xl font-bold'
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out">Rakib</h2>
                    </div>
                    <div className='text-4xl  font-mono backdrop-blur-md bg-blue-600 bg-opacity-10 p-5'
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out">
                        <Typewriter words={['Full Stack Developer', 'Front-End Developer', 'UI/UX Enthusiast', 'React Developer']} loop={false} delaySpeed={2000} cursor={true} />
                    </div>
                </div>


                {/* profile  */}
                <div
                    data-aos="fade-in"
                    data-aos-duration="1500"
                    data-aos-delay="1000"
                    data-aos-easing="ease-in-out"
                    className='mask mask-squircle bg-blue-600 backdrop-blur-md bg-opacity-50 profile-shadow -mt-40'>
                    <img className='w-96' src={profile} />
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