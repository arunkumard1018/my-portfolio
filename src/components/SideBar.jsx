import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { motion } from "framer-motion";

function SideBar() {

    return (
        <aside className="hidden bg-[#222222] lg:flex flex-col p-5 w-[23%] h-screen fixed top-0 left-0" >
            <div className="basis-1/4 relative">
                <h1 className="my text-6xl font-bold m-4">A <span className="text-green-600">/</span> K</h1>
            </div>
            <div className="basis-2/4">
                <ul className="menu ml-4 space-y-4  font-medium cursor-pointer">

                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <a href="#home">
                            <li className='flex text-[1.1rem] items-center space-x-3'><HomeIcon/><span>Home</span></li>
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <a href="#about">
                            <li className='flex text-[1.1rem] items-center space-x-3'><AccountCircleIcon /><span>About</span></li>
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <a href="#skills">
                            <li className='flex text-[1.1rem] items-center space-x-3'><FormatListBulletedIcon /><span>Skills</span></li>
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <a href="#projects">
                            <li className='flex text-[1.1rem] items-center space-x-3'><WorkIcon /><span>Projects</span></li>
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <a href="#contact">
                            <li className='flex text-[1.1rem] items-center space-x-3'><ContactMailIcon /><span>Contact</span></li>
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <a href="#blog">
                            <li className='flex text-[1.1rem] items-center space-x-3'><RateReviewIcon /><span>Blog</span></li>
                        </a>
                    </motion.div>
                </ul>
            </div>
            <div className="basis-1/4 "><p className='ml-4 mt-[4rem] '>© 2024 Built by Arun</p></div>
        </aside >
    )
}

export default SideBar