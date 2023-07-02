import React from 'react';
import { FaGlobe, FaUsersCog } from 'react-icons/fa'
import { BiSolidServer } from 'react-icons/bi'



const singleProject = ({ project, index }) => {
    console.log(project);
    const { image, about, liveLink, clientCode, name, serverCode, technologies, flex } = project || {};
    return (
        <div className={` md:flex ${flex} justify-center items-center gap-10 md:pb-20`}>
            <div className='hover:z-10 transition-all  duration-200 '
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-easing="ease-in-out">
                <img src={image} className=" md:w-[900px] md:h-[520px] md:rounded-md" />
            </div>

            <div className=' backdrop-blur-md bg-blue-600 bg-opacity-20 md:p-10 p-4 text-base text-indigo-200 md:w-[700px] h-fit  md:rounded-md space-y-3  pb-10 '
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out">
                <h1 className='font-black text-2xl text-center md:text-left'
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                >{index + 1}. {name}</h1>
                <p className='font-mono text-justify'
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out">{about}</p>
                <p className='font-bold'>Technologies :</p>
                <p className='grid md:grid-cols-4 grid-cols-2 gap-2 pb-8'
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out">
                    {
                        technologies.map(tech => <span key={tech} className='glowing-btn2 text-xs rounded-sm text-center font-mono'>{tech}</span>)
                    }
                </p>
                <div className='fancy-button  cursor-pointer flex flex-wrap justify-evenly gap-6 md:gap-0'
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out">
                    <span className='wow-btn '>
                        <a href={liveLink} target={'_blank'}> <FaGlobe className='!w-[20px] !h-[20px] mr-2' /> Live Site</a>
                    </span>
                    <span className='wow-btn '>
                        <a href={clientCode} target={'_blank'}> <FaUsersCog className='!w-[20px] !h-[20px] mr-2' /> Client Code</a>
                    </span>
                    <span className='wow-btn '>
                        <a href={serverCode} target={'_blank'}> <BiSolidServer className='!w-[20px] !h-[20px] mr-2' /> Server Code</a>
                    </span>
                </div>
            </div>
        </div >
    );
};

export default singleProject;