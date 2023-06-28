import React from 'react';
import Wave from 'react-wavify'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
    return (
        <div>
            <div className='h-[60vh] flex justify-center items-center'
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
            >
                <h1 className='text-4xl '> Welcome to my Portfolio</h1>
            </div>
            <Wave
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                fill='#6398ed'
                className='h-96'
                paused={false}
                options={{
                    height: 10,
                    amplitude: 60,
                    speed: 0.15,
                    points: 3
                }}
            />
        </div>
    );
};

export default Banner;