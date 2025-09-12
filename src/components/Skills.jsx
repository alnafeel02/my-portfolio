import React from 'react'
import {animate, motion} from 'framer-motion'
import htmlimg from '../assets/icon_html.png'
import cssimg from '../assets/icon_css.png'
import jsimg from '../assets/icon_js.png'
import reactimg from '../assets/icon_react.png'
import bootimg from '../assets/icon_bootstrap.png'
import tailimg from '../assets/icon_tailwind.png'




function Skills() {
  const picture = [
    {image:[htmlimg]},
    {image:[cssimg]},
    {image:[jsimg]},
    {image:[reactimg]},
    {image:[bootimg]},
    {image:[tailimg]},
  ]

  const containerVariants = {
  hidden: {
    opacity: 0,
    // optionally you can shift up/down
    y: 20,

  },
  show: {
    opacity: 1,
    transition: {
      // delay before children start
      delayChildren: 0.3,
      // time between each child animation
      staggerChildren: 0.3
    }
  },
  
};

// Variants for each item
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
  
  return (
    <section className='w-full h-full mx-auto  font-poppins overflow-x-hidden overflow-y-hidden'>  
        <div > 
            <h1 className='text-5xl pt-20 ms-4 '>Skills</h1>
        </div>
        <motion.div
        variants={containerVariants}
          initial="hidden"
          whileInView="show"
        className=' gap-3  flex lg:ms-25 lg:mt-20  justify-center'>
          <div className='flex  gap-3 flex-wrap mb-20'>
            {
              picture.map((item)=>
                <motion.div
                 variants={itemVariants}
                className='lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] border-4 rounded-full hover:scale-110 hover:border-purple-600 border-gray-300 justify-center flex items-center '>
                  <img className='lg:w-[100px] lg:h-[100px] w-[30px] h-[30px] lg:ms-5 lg:mt-5' src={item.image} alt="html" />
                </motion.div>
             )
            }
          </div>
      </motion.div>
    </section>
  )
}

export default Skills