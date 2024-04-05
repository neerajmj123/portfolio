import React from "react";
import image from './Images/c-8676__1_-removebg-preview.png';

const About =()=>{
    return(
        <div className="text-white  bg-gray-800" id="about">
            <div className="md:grid md:grid-cols-2 sm:py-16 ">
                <div className="mt-4 md:mt-0 text-left flex ">
                    <div className="my-auto mx-6">
                        <h2 className="text-4xl font-bold mb-4 text-cyan-300">About Me</h2>
                        <p className="text-base lg:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eaque molestias commodi iusto corrupti ea placeat, odio quasi dolorem sint nemo aspernatur. Error rem sapiente sed enim minus, a quaerat.
                        </p>
                    </div>
                </div>
                <img className="mx-auto rounded-full py-8 md:py-8" src={image} alt="" width={300} height={300}/>
            </div> 
        </div>
    )
}
export default About