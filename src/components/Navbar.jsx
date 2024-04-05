import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-gray-800 text-cyan-300 h-[100px] mx-auto flex justify-between items-center">
      <h1 className='text-3xl font-bold text-cyan-300 ml-4'>Nj</h1>
      <ul className='hidden md:flex'>
        <li className='p-5'><a href="#about" className='hover:border-b-2 border-cyan-300'>About</a></li>
        <li className='p-5'><a href="#work" className='hover:border-b-2 border-cyan-300'> Work</a></li>
        <li className='p-5 '><a href="#contact" className='hover:border-b-2 border-cyan-300 mb-4'>Contact</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={25} className='mr-9'/> : <AiOutlineMenu size={25} className='mr-9'/>}
      </div>
      <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-gray-800 ease-in-out duration-500'
        : 'fixed left-[-100%]'}>
        <h1 className='tet-3xl font-bold text-cyan-300 m-4'>Nj</h1>
        <ul className='p-8 text-2xl'>
          <li className='p-2'><a href="#about">About</a></li>
          <li className='p-2'><a href="#work">Work</a></li>
          <li className='p-2'><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
