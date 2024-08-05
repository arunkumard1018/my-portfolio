import React from 'react'
import { SKILLS } from '../../consts/data'
import { motion } from "framer-motion";
import { MovingHeader } from './Utils';

function SkillSet() {
    function Skill({ info }) {
        return (
            <motion.div
                variants={iconVariants(info.id)}
                initial="initial"
                animate="animate">
                <div className="image-container"><img className='p-5' src={info.srcImage} alt={info.name} />
                    <p className="text-center">{info.name}</p>
                </div>
            </motion.div>
        )
    }
    return (
        <div id='skills' className="skills">
            <div>
                <MovingHeader data={"Technologies"} />
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1.5 }}
                    className='flex flex-wrap items-center justify-center gap-4'>
                    <div className="grid grid-cols-3 lg:grid-cols-8 gap-5 px-8 ">
                        {SKILLS.map((data) => (
                            <Skill info={data} key={data.id} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    }
})

export default SkillSet