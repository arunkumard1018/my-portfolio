import React from 'react'
import { motion } from "framer-motion";
import { MovingHeader } from './Utils';
import { PROJECTS } from '../../consts/data';

function Projects() {
    return (
        <div id='projects' className="Experience px-8">
            <div>
                <MovingHeader data={"Projects"} />
                <div className="">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-evenly'>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className='w-full lg:w-1/4'>
                                <a href={project.link} target="_Blank">
                                    <img
                                        className="mb-6 mr-5 rounded"
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </a>
                            </motion.div>

                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>{project.title} - <span className='text-sm text-purple-100'><a href={project.github}>GitHub</a></span></h6>
                                <h6 className='mb-2 font-semibold'>Project <span className='text-sm text-purple-100'><a href={project.link}></a></span></h6>
                                <p className='mb-4 text-neutral-400'>{project.description}
                                </p>
                                <div className="flex flex-wrap">
                                    {project.technologies.map((technology, index) => (
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

export default Projects