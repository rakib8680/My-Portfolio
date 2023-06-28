import React from 'react';
import Wave from 'react-wavify'
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from '../../assets/profile.png'
AOS.init();

const Banner = () => {
    return (
        <div>
            <div className='h-[50vh] flex justify-center items-center justify-evenly'
            >
                <h1 className='text-4xl '
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"> Welcome to my Portfolio</h1>
                <div
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    className='mask mask-squircle bg-blue-600 backdrop-blur-md bg-opacity-50 profile-shadow'>
                    <img className='w-96' src={profile} />
                </div>
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