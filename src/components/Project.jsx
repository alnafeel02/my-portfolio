import React from 'react'
import {motion} from 'framer-motion'
import pro1img from '../assets/pro1.png'
import pro2img from '../assets/pro2.png'
import pro3img from '../assets/pro3.png'
import pro4img from '../assets/pro4.png'
import pro5img from '../assets/pro5.png'

function Project() {

    const project = [
        {image:[pro1img],name:'E-Commerce project'},
        {image:[pro2img],name:'Guess Number'},
        {image:[pro3img],name:'TO-DO List'},
        {image:[pro4img],name:'E-Commerce UI'},
        {image:[pro5img],name:'CRUD Project'},

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