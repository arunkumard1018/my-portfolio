import React from 'react'
import coding from '../../assets/coding.png';
import { ABOUT, EDUCATION } from '../../consts/data'
import {  MovingHeaderLeftAligned } from './Utils';
function About() {
    return (
        <div id='about' className=" p-5 space-y-5 mt-5 lg:pt-0 lg:mt-0">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:mt-10">
                <div className="image-container w-[100%]"><img src={coding} alt="coding" className="hidden lg:block" /></div>
                <div className="space-y-4 p-5 lg:mr-10">
                    <MovingHeaderLeftAligned data={"About Me"} />
                    <p className=" text-justify font-light">{ABOUT}</p>
                    <p className=" text-justify font-light">{EDUCATION}</p>
                </div>
            </div>
        </div>
    )
}

export default About