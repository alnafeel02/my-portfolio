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

  const iconVariants = (duration) => ({
    initial: {},
    animate: {
      x:[10,-10],
      transition:{
        duration: duration,
        ease:"linear",
        repeat: Infinity,
        repeatType:"reverse",
      }
    },
  })
  return (
    <section className='w-full h-full mx-auto  font-poppins overflow-x-hidden'>  
        <div > 
            <h1 className='text-5xl pt-20 ms-4 '>Skills</h1>
        </div>
        <div className=' gap-3  flex ms-25 mt-20  justify-center'>
          <div className='flex  gap-3 flex-wrap'>
            {
              picture.map((item)=>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='w-[150px] h-[150px] border-4 rounded-full hover:scale-50'>
                  <img className='w-[100px] h-[100px] ms-5 mt-5' src={item.image} alt="html" />
                </motion.div>
             )
            }
          </div>
      </div>
    </section>
  )
}

export default Skills