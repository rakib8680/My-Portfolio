import Lottie from 'lottie-react';
import React from 'react';
import animation from '../../assets/89604-contact.json'


const Contact = () => {
    return (
        <div className='shapedividers_com-2722 fancy-bg  pb-36'>
            <h1 className='text-indigo-200  text-6xl mt-56 font-black md:ml-[457px] ml-5'
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >Get <br /> In  Touch</h1>
            <div className='divider w-2/12 bg-[#97a5ff] h-1 rounded-full mx-auto'
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"></div>
            <div className='md:flex justify-evenly items-center '>
                <div className="max-w-md w-full md:mx-4 p-8  bg-indigo-950 bg-opacity-20  "
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <form>
                        <div className="mb-6">
                            <label className="block text-indigo-200 text-sm font-medium mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="w-full backdrop-blur-md bg-blue-900 bg-opacity-10 text-indigo-200 py-2 px-4  focus:outline-none focus:ring-2 focus:ring-indigo-900"
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-indigo-200 text-sm font-medium mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="w-full backdrop-blur-md bg-blue-900 bg-opacity-10 text-indigo-200 py-2 px-4  focus:outline-none focus:ring-2 focus:ring-indigo-900"
                                type="email"
                                id="email"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-indigo-200 text-sm font-medium mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="w-full backdrop-blur-md bg-blue-900 bg-opacity-10 text-indigo-200 py-2 px-4  h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-900"
                                id="message"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <button
                            className="order bg-[#0e1125]  hover:bg-[#0e1230] text-indigo-200 font-semibold py-2 px-6  w-full"
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </div>
                <div className=' md:w-[550px]'
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <Lottie animationData={animation} loop={true} />
                </div>
            </div>
            <h1 className='text-indigo-200 font-mono text-center relative md:top-28 top-24 md:text-sm text-xs'>All rights reserved by <span className='neonText font-mono'> Abdullah Al Rakib</span></h1>
        </div>
    );
};

export default Contact; 