import React from "react";
import css from './Images/css.png';
import html from './Images/html.png'
import java from './Images/javascript.png'
import react from './Images/react.png'
import tailwind from './Images/tailwind.png'

const Skills = () => {
    return (
        <div className="border border-gray-500 mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center bg-gray-800">
            <h2 className="text-white text-2xl md:text-4xl font-bold m-4">
                My <br /> Tech <br /> Stack
            </h2>
            <div className="flex flex-col items-center m-4 sm:my-0">
                <img src={css} alt="" width={100} height={100} />
                <p className="mt-2 text-white">CSS</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0">
                <img src={html} alt="" width={100} height={100} />
                <p className="mt-2 text-white">HTML</p>

            </div>
            <div className="flex flex-col items-center m-4 sm:my-0">
                <img src={java} alt="" width={100} height={100} />
                <p className="mt-2 text-white">JavaScript</p>

            </div>
            <div className="flex flex-col items-center m-4 sm:my-0">
                <img src={react} alt="" width={100} height={100} />
                <p className="mt-2 text-white">React</p>

            </div>
            <div className="flex flex-col items-center m-4 sm:my-0">
                <img src={tailwind} alt="" width={100} height={100} />
                <p className="mt-2 text-white">Tailwind</p>

            </div>
        </div>
    );
}

export default Skills;
