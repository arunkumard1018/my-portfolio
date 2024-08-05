import React from 'react'
import { motion } from "framer-motion";

export function MovingHeader({data}) {
    return (
        <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className='my-10 text-center text-4xl'>{data}</motion.h1>
    )
}
export function MovingHeaderLeftAligned({data}) {
    return (
        <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className='text-4xl'>{data}</motion.h1>
    )
}

