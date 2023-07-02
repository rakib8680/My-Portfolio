import React from 'react';

const singleProject = ({ project, index }) => {
    console.log(project);
    const { image, about, liveLink, clientCode, name, serverCode, technologies, flex } = project || {};
    return (
        <div className={`flex ${flex} justify-center items-center  pb-20`}>
            <div className='hover:z-10 transition-all  duration-200 '>
                <img src={image} className="w-[900px] h-[520px] rounded-md" />
            </div>

            <div className=' backdrop-blur-md bg-blue-600 bg-opacity-20 p-10 text-base text-indigo-200 w-[800px] h-fit rounded-md space-y-3  '>
                <h1 className='font-black text-2xl'>{index + 1}. {name}</h1>
                <p className='font-mono '>{about}</p>
                <p className='grid grid-cols-4 gap-2'>
                    {
                        technologies.map(tech => <span className='glowing-btn2 text-xs rounded-sm text-center font-mono'>{tech}</span>)
                    }
                </p>
                <button></button>
            </div>
        </div>
    );
};

export default singleProject;