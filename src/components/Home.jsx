import React from 'react'
import { motion } from "framer-motion";
import Fab from '@mui/material/Fab';
import profile from '../assets/profile_n.jpg'
import { SOCIAL_LINKS, HERO_DESC } from '../consts/data';

function Home() {

    const Social = ({ info }) => {
        return (
            <>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    <a href={info.url} target='_blank'><Fab color='success' ><img className="invert w-5 hover:touch-pinch-zoom"
                        src={info.logo} alt="logo" /></Fab></a>
                </motion.div>
            </>
        )
    }
    return (
        <div id="home" className="home lg:h-screen flex flex-col items-center lg:justify-center space-y-5  mt-28 lg:mt-0 lg:mb-0">
            <div className="border-[5px] rounded-lg">
                <img className="w-32" src={profile} alt="profile" />
            </div>
            <h1 className="font-extralight text-4xl  lg:text-5xl">Hello I'm 
                <span className="font-extralight text-7xl lg:text-8xl"> Arun</span>
            </h1>
            <p className="text-center text-5xl hero-text">{"Full Stack "}
                <span className="text-purple-500">Developer</span>
            </p>
            <p className="px-10 text-justify lg:px-24 font-light text">{HERO_DESC}</p>
            <div className="social flex space-x-4">
                {SOCIAL_LINKS.map((data, index) => (
                    <Social info={data} key={index} />
                ))}
            </div>
        </div>

    )
}



export default Home