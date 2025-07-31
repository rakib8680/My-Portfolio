import { motion } from "framer-motion";
import Link from 'react-scroll/modules/components/Link';

const Box = () => {
    return (
        <Link to="about" spy={true} smooth={true} offset={-20} duration={800}
            className=' flex justify-center  relative bottom-40 cursor-pointer '>
            <motion.div
                className=''
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            >
                <h1 className='text-lg text-center font-mono  bg-[#97a5ff] w-fit p-10 fancy-boarder'>Click <br /> Here </h1>
            </motion.div>
        </Link>
    );
};

export default Box;