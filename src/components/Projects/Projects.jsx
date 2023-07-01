import React from 'react';
import Wave from 'react-wavify'



const Projects = () => {

  


    return (
        <div className='custom-shape-divider-top-1688219589 relative fancy-bg2 h-screen'>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
            <div className='text-center'>
                MY Latest Projects
            </div>
              <Wave
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                fill='#19223e'
                className=' absolute -bottom-'
                paused={false}
                options={{
                    height: 1,
                    amplitude: 60,
                    speed: 0.15,
                    points: 3
                }}
            />
        </div>
    );
};

export default Projects;