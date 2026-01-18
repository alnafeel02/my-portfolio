import React from 'react'
import {motion} from 'framer-motion'
import pro1img from '../assets/pro1.png'
import pro2img from '../assets/pro2.png'
import pro3img from '../assets/pro3.png'
import pro4img from '../assets/pro4.png'
import pro5img from '../assets/pro5.png'
import pro6img from '../assets/pro6.png'
import pro7img from '../assets/pro7.png'

function Project() {

    const project = [
      {
        image: [pro7img],
        name: "YOGA Website",
        git: "https://github.com/alnafeel02/Yoga_Course_Project",
      },
      {
        image: [pro6img],
        name: "Authentication Project",
        git: "https://github.com/alnafeel02/Authentication_Project1",
      },
      {
        image: [pro1img],
        name: "E-Commerce project",
        git: "https://github.com/alnafeel02/e-commerce-nafy",
      },
      {
        image: [pro2img],
        name: "Guess Number",
        git: "https://github.com/alnafeel02/guess_num_game",
      },
      {
        image: [pro3img],
        name: "TO-DO List",
        git: "https://github.com/alnafeel02/todo-list",
      },
      {
        image: [pro4img],
        name: "E-Commerce UI",
        git: "https://github.com/alnafeel02/e-commerce",
      },
      {
        image: [pro5img],
        name: "CRUD Project",
        git: "https://github.com/alnafeel02/CRUD_demo",
      },
    ];
    const handleOpen = (git) => {
        window.open(git, '_blank');
    };

  return (
    <section className='w-full h-full font-poppins mx-auto mt-20 overflow-x-hidden'>
      <h1 className='ms-6 text-5xl'>Project</h1>
      <div className='lg:mt-30 mt-30 ms-4 flex gap-5 flex-wrap justify-center'>
        {project.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: -50 }}
            transition={{ duration: 1.9, delay: 1 }}
            className='hover:scale-95 lg:w-[250px] lg:h-[350px] '
          >
            <h2 className='text-xl text-center mt-2'>{item.name}</h2>
            <img
              src={item.image}
              alt='pro1'
              className='lg:w-[250px] lg:h-[250px] w-[200px] h-[200px] rounded-xl '
            />
            {item.git && (
              <button
                onClick={() => handleOpen(item.git)}
                className='bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-md mt-4 xl:ms-16 ms-10 hover:scale-105 hover:from-purple-700 hover:to-blue-600 transition-all duration-300'
                >
                View Code
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project