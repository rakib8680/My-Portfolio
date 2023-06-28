import React from 'react';
import { FaHome, FaInfoCircle, FaPencilRuler } from 'react-icons/fa';
const NabBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 lg:hidden">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label className="btn btn-circle swap swap-rotate lg:hidden">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" />

                            {/* hamburger icon */}
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                            {/* close icon */}
                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="btm-nav z-10 bg-transparent hidden md:flex">
                <button className='backdrop-blur-md bg-white bg-opacity-50'>
                    <FaHome className='w-[22px] h-[22px]' />
                    <span className="btm-nav-label">Home</span>
                </button>
                <button className="active backdrop-blur-md bg-white bg-opacity-70">
                    <FaInfoCircle className='w-[22px] h-[22px]' />
                    <span className="btm-nav-label">About</span>
                </button>
                <button className='backdrop-blur-md bg-white bg-opacity-50'>
                    <FaPencilRuler className='w-[22px] h-[22px]' />
                    <span className="btm-nav-label">Projects</span>
                </button>
            </div>
        </div>
    );
};

export default NabBar;