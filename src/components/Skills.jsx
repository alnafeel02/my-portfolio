import React from 'react'
import {animate, motion} from 'framer-motion'
import htmlimg from '../assets/icon_html.png'
import cssimg from '../assets/icon_css.png'
import jsimg from '../assets/icon_js.png'
import reactimg from '../assets/atom.png'
import bootimg from '../assets/icon_bootstrap.png'
import tailimg from '../assets/icon_tailwind.png'
import nodeimg from '../assets/node-js.png'
import expressimg from '../assets/icons8-express-js-96.png'
import mongoimg from '../assets/icons8-mongo-db-96.png'
import mysqlimg from '../assets/mysql.png'
import figmaimg from '../assets/figma.png'
import gitimg from '../assets/icons8-git-100.png'


function Skills() {
  const picture = [
    {image:[htmlimg]},
    {image:[cssimg]},
    {image:[jsimg]},
    {image:[reactimg]},
    {image:[nodeimg]},
    {image:[expressimg]},
    {image:[mongoimg]},
    {image:[mysqlimg]},
    {image:[bootimg]},
    {image:[tailimg]},
    {image:[figmaimg]},
    {image:[gitimg]},
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
        className=' gap-3  flex lg:ms-25 lg:mt-20  justify-center ms-15 me-10'>
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