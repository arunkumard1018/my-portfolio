import React from 'react'
import { motion } from "framer-motion";
import { MovingHeader} from './Utils';
import { EXPERIENCES } from '../../consts/data';

function Experience() {
    return (
        <div id='experience' className="Experience px-8">
            <div>
                <MovingHeader data={"Experience"} />
                <div className="">
                    {EXPERIENCES.map((experience, index) => (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className='w-full lg:w-1/4'>
                                <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                            </motion.div>

                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span></h6>
                                <p className='mb-4 text-neutral-400'>{experience.description}
                                </p>
                                <div className="flex flex-wrap">
                                    {experience.technologies.map((technology, index) => (
                                        <span className='mr-2 mt-2 rounded bg-green-600 px-2 py-1 text-sm font-md text-darkblue-100' key={index}>{technology}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience