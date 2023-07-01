import React from 'react';
import { motion } from "framer-motion";

const Box = () => {
    return (
        <div className=' flex justify-center  relative bottom-40 '>
            <motion.div
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            >
                <h1 className='text-lg text-center font-mono  bg-[#97a5ff] w-fit p-10 fancy-boarder'>Scroll <br /> Down </h1>

            </motion.div>
        </div>
    );
};

export default Box;