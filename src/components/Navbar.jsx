import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <div className=' font-poppins w-full mx-auto  flex justify-between p-5 overflow-x-hidden'>
        <h1 className=' text-3xl font-bold bg-gradient-to-br from-red-600 to-purple-600 text-transparent bg-clip-text '>Portfolio</h1>
        <div className=' md:flex gap-10 hidden'>
          <a href="https://github.com/alnafeel02"><FontAwesomeIcon icon={faGithub} size='2xl'/></a>
          <a href="https://www.linkedin.com/in/al-nafeel02/"><FontAwesomeIcon icon={faLinkedin} size='2xl'/></a>
          <a href="https://www.instagram.com/al_nafeel02/"><FontAwesomeIcon icon={faInstagram} size='2xl'/></a>
        </div>
    </div>
  )
}

export default Navbar