import React from "react";
import project from "./Images/project1.jpg"
const Work = () => {
    return (
        <div className="text-white  bg-gray-800" id="work">
            <div className="pb-8">
                <p className="text-4xl mb-3 font-bold text-cyan-300">Work</p>
                <p className="text-white">Check out some recent works</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="transform transition-transform duration-100 hover:scale-105 overflow-hidden shadow-lg shadow-cyan-300 group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
                    <img src={project}  alt="" />
                </div>
                
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="transform transition-transform duration-100 hover:scale-105 overflow-hidden shadow-lg shadow-cyan-300 group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
                    <img src={project}  alt="" />
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="transform transition-transform duration-100 hover:scale-105 overflow-hidden shadow-lg shadow-cyan-300 group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
                    <img src={project}  alt="" />
                </div>
            </div>
        </div>
    )
}
export default Work