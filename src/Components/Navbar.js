import React, { useState } from 'react';
import pic from "../Assets/amit.jpg"; 
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {Link} from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center py-4 bg-pink-300 shadow-md fixed top-0 left-0 right-0'>
      <div className='flex items-center space-x-4'>
        <img src={pic} alt='amit' className='w-12 h-12 rounded-full' />
        <div>
          <h1 className='text-xl font-bold'>
            Ami<span className='text-green-500'>t </span>
            Prata<span className='text-green-500 ..'>p </span>
            Sing<span className='text-green-500 ..'>h </span>
          </h1>
          <h2 className='text-sm text-gray-500'>Software Engineer</h2>
        </div>
      </div>
      
      {toggle ? (
        <AiOutlineClose 
          onClick={() => setToggle(!toggle)} 
          className='text-white text-2xl md:hidden block' 
        />
      ) : (
        <AiOutlineMenu 
          onClick={() => setToggle(!toggle)} 
          className='text-white text-2xl md:hidden block' 
        />
      )}

      <ul className='hidden md:flex gap-10 text-center'>
        <li className='hover:text-black hover:scale-105 transition duration-200 cursor-pointer'><Link to="HeroSection" spy={true} smooth={true} duration={500}>Home</Link></li>
        <li className='hover:text-black hover:scale-105 transition duration-200 cursor-pointer'><Link to="About" spy={true} smooth={true} duration={500}>About</Link></li>
        <li className='hover:text-black hover:scale-105 transition duration-200 cursor-pointer'><Link to="Projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
        <li className='hover:text-black hover:scale-105 transition duration-200 cursor-pointer'><Link to="Experiance" spy={true} smooth={true} duration={500}>Experiance</Link></li>
        <li className='hover:text-black hover:scale-105 transition duration-200 cursor-pointer'><Link to="Contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Responsive menu */}
      <ul 
        className={`md:hidden w-full h-screen text-white fixed bg-black left-0 top-[92px] transition-transform duration-300
          ${toggle ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <li className='hover:text-black hover:scale-105 transition duration-200 cursor-pointer'><Link onClick={()=> setToggle(!toggle)} to="HeroSection" spy={true} smooth={true} duration={500}>Home</Link></li>
        <li className='hover:text-black hover:scale-105 transition duration-200 cursor-pointer'><Link onClick={()=> setToggle(!toggle)} to="About" spy={true} smooth={true} duration={500}>About</Link></li>
        <li className='hover:text-black hover:scale-105 transition duration-200 cursor-pointer'><Link onClick={()=> setToggle(!toggle)} to="Projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
        <li className='hover:text-black hover:scale-105 transition duration-200 cursor-pointer'><Link onClick={()=> setToggle(!toggle)} to="Experiance" spy={true} smooth={true} duration={500}>Experiance</Link></li>
        <li className='hover:text-black hover:scale-105 transition duration-200 cursor-pointer'><Link onClick={()=> setToggle(!toggle)} to="Contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
