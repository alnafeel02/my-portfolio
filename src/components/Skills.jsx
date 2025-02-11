import React from 'react'
import {animate, motion} from 'framer-motion'



function Skills() {
  const picture = [
    {image:'src/assets/icon_html.png'},
    {image:'src/assets/icon_css.png'},
    {image:'src/assets/icon_js.png'},
    {image:'src/assets/icon_react.png'},
    {image:'src/assets/icon_bootstrap.png'},
    {image:'src/assets/icon_tailwind.png'},
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