import React, { useEffect, useState } from 'react';
import Wave from 'react-wavify'
import SingleProject from './SingleProject'


const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data.projects))
    }, [])


    return (
        <div className='custom-shape-divider-top-1688219589 relative fancy-bg2'>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
            <div className='text-4xl text-indigo-200 text-center'
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="ease-in-out">
                MY Latest Projects
            </div>
            <div className='divider w-2/12 bg-[#97a5ff] h-1 rounded-full mx-auto '
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
            </div>
            <div className='py-20 '>
                {
                    projects.map((project, index) => <SingleProject key={index} project={project} index={index} />)
                }
            </div>
            <div className='scrolldown'>
                <div className="chevrons">
                    <div className='chevrondown'></div>
                    <div className='chevrondown'></div>
                </div>
            </div>

            {/* wave  */}
            <div className=''>
                <Wave
                    fill='#19223e'
                    className=' '
                    paused={false}
                    options={{
                        height: 10,
                        amplitude: 60,
                        speed: 0.15,
                        points: 3
                    }}
                />
            </div>
        </div>
    );
};

export default Projects;