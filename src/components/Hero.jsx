import React from 'react'
import {motion} from 'framer-motion'

function Hero() {
  return (
<section className=' flex flex-col items-start md:grid grid-cols-2 gap-15 font-poppins w-full h-full  overflow-x-hidden'>
    <motion.div
              initial={{ opacity: 0,x: 0 }}
              whileInView={{ opacity: 1,x: 100 }}
          transition={{duration:1.5,delay: 1}}
    className=' md:ms-30 md:mt-35 mt-10 text-2xl '>
        <h1 className=' md:text-5xl font-thin'>Hi</h1>
        <h1 className='md:text-5xl text-2xl'>I'm Al Nafeel</h1>
        <h2 className='md:text-4xl text-2xl mt-6 bg-gradient-to-br from-red-600 to-purple-600 text-transparent bg-clip-text'>Front-End Developer</h2>
        <p className='mt-7 me-30 text-sm md:text-md'>As a passionate Frontend Developer, I specialize in creating dynamic and responsive websites that deliver seamless user experiences. With a solid foundation in HTML, CSS, JavaScript, and modern frameworks like React. I focus on crafting visually appealing and accessible interfaces. I’m dedicated to writing clean, maintainable code and keeping up with industry trends to ensure my work is both innovative and user-centric. Whether building from scratch or optimizing existing projects, my goal is to bring designs to life and make complex features easy to use. Let's build something great together!</p>
    </motion.div> 
    <div>
   
        <motion.img  initial={{ opacity: 0 ,x:0}}
  whileInView={{ opacity: 1,x:-20 }} 
  transition={{duration:1.5,delay: 1}}
  src="src\assets\nafee.jpeg" className='md:w-[450px] md:h-[450px] rounded-full md:mt-25 md:ms-15 w-[250px] h-[250px] ms-30' alt="main" />
    </div>
</section>
  )
}

export default Hero
