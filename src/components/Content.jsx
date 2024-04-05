import React from 'react';
import { TypeAnimation } from "react-type-animation";
import image from './Images/c-8676__1_-removebg-preview.png';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const Content = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200]: mx-auto py-8 bg-gray-800'>

      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
          <img className="mx-auto rounded-full" src={image} alt=""  />
      </div>
      
        <div className='col-span-2 px-20 my-auto'>
          <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
            <span className='text-cyan-300'>I'm a </span> <br />
            <TypeAnimation
              sequence={["Frontend Dev", 1000, "Backend Dev", 1000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-white sm:text-lg my-6 lg:text-xl'>
            My name is Neeraj M J and I am a web developer
          </p>
          <div className='text-5xl flex justify-start gap-12 my-7 text-cyan-300'>
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>
          <div className='my-8 '>
            <a href="#" className='px-6 py-3 w-full  rounded-xl mr-4 bg-gradient-to-br from-cyan-300 to-cyan-500 text-black'>
              Download CV
            </a>
            <a href="#" className='px-6 py-3 w-full  rounded-xl mr-4  border border-cyan-300 hover:bg-gradient-to-br from-cyan-300 to-cyan-700 text-cyan-400 hover:border-none'>
              Contact
            </a>
          </div>
        </div>

    </div>

  );
};

export default Content;
