import React from 'react'
import {motion} from 'framer-motion'

function Project() {

    const project = [
        {image:'src/assets/pro1.png',name:'E-Commerce project'},
        {image:'src/assets/pro2.png',name:'Guess Number'},
        {image:'src/assets/pro3.png',name:'TO-DO List'},
        {image:'src/assets/pro4.png',name:'E-Commerce UI'},
        {image:'src/assets/pro5.png',name:'CRUD Project'},

    ]

  return (
    <section className='w-full h-full font-poppins mx-auto mt-20 overflow-x-hidden'>
        <h1 className='ms-6 text-5xl'>project</h1>
        <div className='mt-20 ms-10 flex gap-5 flex-wrap justify-center'>
        {
            project.map((item)=>
                <motion.div
                initial={{ opacity: 0,y: 0 ,x:6 }}
                whileInView={{ opacity: 1,y: -50 }}
                transition={{duration:1.9,delay: 1}}
                className='hover:scale-95 w-[250px] h-[350px]'>
                <img src={item.image} alt="pro1" className='w-[250px] h-[250px]'/>
                <h2 className='text-xl text-center'>{item.name}</h2>
                </motion.div>
            )
        }
        </div>
    </section>

  )
}

export default Project