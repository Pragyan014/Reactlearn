import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
        <nav className='justify-between'>

        <div className='grid grid-cols-2 gap-5 bg-gray-500'>
            <ul className='flex flex-row justify-center justify-between'>
                <li className=""><Link to='/'>Home</Link></li>
                <li className=""><Link to='/about'>About</Link></li>
                <li className=""><Link to=''>Projects</Link></li>
                <li className=""><Link to='/crud'>Crud</Link></li>

            </ul>
            <div className='flex flex-row justify-center justify-end'>
            <FaFacebookF />
            <FaXTwitter />
        
        </div>
        </div>
        
    </nav>
    </>
  )
}

export default Navbar