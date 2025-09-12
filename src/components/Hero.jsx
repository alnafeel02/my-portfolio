import React from 'react';
import {motion} from 'framer-motion';
import myimage from "../assets/nafee.jpeg";
import resume from '../assets/AL_NAFEEL_Resume_Dev.pdf'

function Hero() {
 
  const handleDownload = () => {
    window.open(resume, '_blank');
  }
  return (
<section className=' flex flex-col items-start sm:grid grid-cols-2 gap-15 font-poppins w-full h-full  overflow-x-hidden'>
    <motion.div
              initial={{ opacity: 0,x: 0 }}
              whileInView={{ opacity: 1,x: 50 }}
          transition={{duration:1.5,delay: 1}}
    className=' sm:ms-30 sm:mt-35 mt-10 text-2xl '>
        <h1 className=' sm:text-5xl font-thin'>Hi</h1>
        <h1 className='sm:text-5xl text-3xl'>I'm Al Nafeel</h1>
        <h2 className='sm:text-5xl text-4xl mt-6 bg-gradient-to-br from-red-600 to-purple-600 text-transparent bg-clip-text'>Front-End Developer</h2>
        <p className='mt-7 me-30 text-sm sm:text-md '>As a passionate Frontend Developer, I specialize in creating dynamic and responsive websites that deliver seamless user experiences. With a solid foundation in HTML, CSS, JavaScript, and modern frameworks like React. I focus on crafting visually appealing and accessible interfaces. I’m dedicated to writing clean, maintainable code and keeping up with industry trends to ensure my work is both innovative and user-centric. Whether building from scratch or optimizing existing projects, my goal is to bring designs to life and make complex features easy to use. Let's build something great together!</p>
    <motion.div
        initial={{ opacity: 0,x: 0 }}
        whileInView={{ opacity: 1,x: 20 }}
        transition={{duration:1.5,delay: 1}}
    >
      <button onClick={handleDownload} className='bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-md mt-10 ms-10 hover:scale-105 hover:from-purple-700 hover:to-blue-600 transition-all duration-300'>
      Download CV
    </button>
    </motion.div>
    </motion.div> 
    
    <div>
   
        <motion.img  initial={{ opacity: 0 ,x:0}}
  whileInView={{ opacity: 1,x:-60 }} 
  transition={{duration:1.5,delay: 1}}
  src={myimage} className='hidden lg:block sm:w-[450px] sm:h-[450px] rounded-full md:mt-25 sm:ms-15 w-[250px] h-[250px] ms-30' alt="main" />
    </div>
</section>
  )
}

export default Hero;
