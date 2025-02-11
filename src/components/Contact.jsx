import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import {animate, motion} from 'framer-motion'

function Contact() {
  return (
    <section className='w-full h-full mx-auto  md:mt-40 font-poppins sm:mt-10 overflow-x-clip'>
        <h1 className='text-5xl ms-5'>Contact</h1>
        <div>
            <img src="src/assets/map.avif" alt="map" className='w-full h-full opacity-12 absolute'/>
            <div className='relative top-50 left-50 space-y-12 flex-col  '>
            <motion.h1 initial={{x: 0,opacity: 0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5,delay:1}} >Mobile : +919790052940</motion.h1>
            <motion.h1
            initial={{x: 0,opacity: 0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5,delay:1}}
            >Email : alnafeel10207@gmail.com</motion.h1>
            </div>
            <motion.div
            initial={{x: 0,opacity: 0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5,delay:1.2}}
            className='relative top-100   flex justify-center gap-6'>
                <a href="https://github.com/"><FontAwesomeIcon icon={faGithub} size='2xl'/></a>
                <a href="https://www.linkedin.com/in/al-nafeel02/"><FontAwesomeIcon icon={faLinkedin} size='2xl'/></a>
                <a href="https://www.instagram.com/al_nafeel02/"><FontAwesomeIcon icon={faInstagram} size='2xl'/></a>
            </motion.div>
        </div>

    </section>
  )
}

export default Contact