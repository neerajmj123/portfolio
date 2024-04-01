import React from 'react';
import {TypeAnimation} from "react-type-animation"
import image from './Images/c-8676__1_-removebg-preview.png'
import image1 from './Images/c-8676 (1).jpg'

const Content = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8  mx-auto py-8 bg-gray-800'>
      <div className='my-auto mx-auto'>
          <div className='rounded-full overflow-hidden  w-50 '>
              <img src={image} className='' alt="" />
          </ div>
      </div>

      <div className='col-span-2 px-5 mt-16'>
          <h1 className='text-white text-4xl sm:text-5xl lg:text-8pxl font-extrabold'>
                
            <span className='text-cyan-300'>
              I'm a 
            </span> <br />
            <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Backend Dev",
              1000
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            />
          </h1>
          <p className='text-white sm:text-lg my-6 lg:text-xl'>
            My name is Neeraj M J and I am a webdevelober
          </p>
          <div className='my-8'>
              <a href="" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white' >
                Download CV
              </a>
              <a href="" className='px-6 py-3 w-full rounded-xl mr-4 border-cyan-800 hover:bg-gradient-to-br from-cyan-600 to-cyan-700 text-white hover:border-none'>
                Contact
              </a>
          </div>
      </div>
    </div>
  );
};

export default Content;
