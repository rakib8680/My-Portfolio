import React from 'react';
import { motion } from "framer-motion"
import Wave from 'react-wavify'
import Box from './Box/Box';
import AboutMe from './AboutMe/AboutMe';
{/* <Wave
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                fill='#97a5ff'
                className='h-96'
                paused={false}
                options={{
                    height: 10,
                    amplitude: 60,
                    speed: 0.15,
                    points: 3
                }}
            /> */}


const About = () => {
    return (
        <div className='h-full relative custom-shape-divider-top-1687948252 bg-slate-900'>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
            </svg>
            <Box />
            <AboutMe />
        </div>
    );
};

export default About;