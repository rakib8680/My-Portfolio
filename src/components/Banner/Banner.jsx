/* eslint-disable react/jsx-no-target-blank */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAngleRight, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'
import profile from '../../assets/profile2.jpg'
import resume from '../../assets/MyResume.pdf';

AOS.init();

const Banner = () => {

    return (
        <div className=''>
            <div className='bannerContainer'>
                <div className='space-y-3 -mt-40 '>
                    <h1
                        className='welcomeText'
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        data-aos-delay="1500"
                        data-aos-easing="ease-in-out"> Welcome to my Portfolio ! 👋
                    </h1>
                    <div className='nameContainer content'>
                        <h1 className=' md:text-8xl text-5xl  pt-7 neonText text-center'
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out">Abdullah Al</h1>
                        <div className='absolute md:top-60 top-44 md:left-[225px]' data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out">
                            <h2 className='md:text-9xl text-8xl font-bold'>Rakib</h2>
                            <h2 className='md:text-9xl text-8xl  font-bold'>Rakib</h2>
                        </div>
                    </div>
                    <div className='typewriterContainer'
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="1500">
                        <FaAngleRight className='text-[#97a5ff]' />
                        <Typewriter cursorStyle='🚦' words={['Full Stack Developer', 'Front-End Developer', 'UI/UX Enthusiast', 'MERN Stack Developer', 'Backend Developer']} loop={false} delaySpeed={2000} cursor={true} />
                    </div>
                    <div className='resumeContainer'
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="1800">
                        <a href='https://www.twitter.com/rakib8680' target={'_blank'} className='glowing-btn py-3 md:py-2 '>Hire Me</a>
                        <a href={resume} download={resume} className='glowing-btn  py-3 md:py-2' >My Resume</a>
                    </div>
                </div>

                {/* profile  */}
                <div className='flex flex-col items-center mt-56 p-4 md:mt-0 md:p-0 mb-36'>
                    <div
                        data-aos="fade-in"
                        data-aos-duration="1500"
                        data-aos-delay="400"
                        data-aos-easing="ease-in-out"
                        className='profileCss profile-shadow'>
                        <img className='w-96 ' src={profile} />
                    </div>
                    <div className='flex gap-7 mt-5'>
                        <a href="https://www.instagram.com/rakib_8680_/">
                            <FaInstagram className='neonText2  rounded-full p-2' size={40}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                                data-aos-delay="2000"
                                data-aos-easing="ease-in-out" />
                        </a>
                        <a href="https://www.twitter.com/rakib8680">
                            <FaTwitter className='neonText2 rounded-full p-2' size={40}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                                data-aos-delay="2200"
                                data-aos-easing="ease-in-out" />
                        </a>
                        <a href="https://www.twitter.com/rakib8680">
                            <FaFacebook className='neonText2 rounded-full p-2' size={40}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                                data-aos-delay="2400"
                                data-aos-easing="ease-in-out" />
                        </a>
                        <a href="https://github.com/rakib8680">
                            <FaGithub className='neonText2 rounded-full p-2' size={40}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                                data-aos-delay="2600"
                                data-aos-easing="ease-in-out" />
                        </a>
                        <a href="https://www.linkedin.com/in/rakib8680">
                            <FaLinkedin className='neonText2 rounded-full p-2' size={40}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                                data-aos-delay="2800"
                                data-aos-easing="ease-in-out" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;