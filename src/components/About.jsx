import React from 'react';
import {motion} from 'framer-motion';
import aboutImg from '../assets/nafee2.jpg';

function About() {
  return (
    <section className=' mx-auto  font-poppins w-full h-full '>
        <h1 className='mt-20 pt-20 text-5xl ms-4'>About Me</h1>
        <div className='sm:grid grid-cols-[40%_60%] ms-5'>
            <motion.img
            initial={{ opacity: 0,x:0}}
            whileInView={{ opacity: 1,x:40 }}
            transition={{duration:1.5,delay: 1}}
            src={aboutImg} alt="" className='sm:w-[300px] sm:h-[400px] w-[200px] rounded-4xl mt-30 sm:ms-30 mb-14 '/>
            <motion.p 
            initial={{ opacity: 0,x:0}}
            whileInView={{ opacity: 1,x:-30 }}
            transition={{duration:1.5,delay: 1}}
            className='mt-30 me-4 ms-15  pb-10'>Hi, I’m Al Nafeel, a passionate Frontend Developer with a keen eye for detail and a love for creating seamless digital experiences. With expertise in HTML, CSS, JavaScript, and popular frameworks like React, I build responsive, user-friendly websites that are not only functional but visually captivating. My focus is on clean code, accessibility, and delivering intuitive interfaces that users can enjoy. I’m always exploring new technologies and striving to improve my skills to stay ahead of the curve in the ever-evolving world of web development. When I’m not coding, you can find me experimenting with design, learning new tools, or collaborating with others to turn creative ideas into reality. Let’s connect and build something amazing!</motion.p>
        </div>
    </section>
  )
}

export default About
