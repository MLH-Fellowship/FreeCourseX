import React from 'react';
import "tailwindcss/tailwind.css"
import { Link } from 'react-router-dom';

import logo from "../assets/logo.png";
import landingimg from "../assets/landingimg.svg"
import video from "../assets/video.png";
import books from "../assets/books.png";
import project from "../assets/project-management.png";



function LandingPage() {
    return (
        <div className="bg-yellow-50 pb-4">
            <div className="h-screen flex flex-col justify-center items-center">
                <img src={logo} className="w-3/5" alt="Landing Image" />
                <h3 className="text-4xl italic text-blue-400 p-2">courses your way</h3>

                <div className="flex flex-row items-end h-3/5 ">
                    <img className="h-full" src={landingimg} alt="Landing" />
                    <Link to="/form">
                        <button type="button" className="top-3 h-10 px-4 py-2 mb-10 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">get started</button>
                    </Link>
                </div>
            </div>

            <div className="h-screen flex flex-col justify-center text-center">
                <h1 className="text-5xl font-black text-blue-400 mb-10">Find the course <br />that fits your learning style!</h1>

                <div className="flex flex-row mx-4">
                    <div className="flex flex-wrap content-between justify-center w-1/3 bg-blue-300 hover:bg-blue-200 py-8 px-3 mx-5 rounded-lg shadow-md hover:shadow-xl">
                        <h1 className="text-yellow-50 font-medium text-4xl mb-5">by seeing</h1>
                        <img src={video} className="w-4/5" alt="eye" />
                    </div>
                    <div className="flex flex-wrap content-between justify-center w-1/3 bg-blue-300 hover:bg-blue-200 py-8 px-3 mx-5 rounded-lg shadow-md hover:shadow-xl">
                        <h1 className="text-yellow-50 font-medium text-4xl mb-5">by reading/ writing</h1>
                        <img src={books} className="w-4/5" alt="eye" />
                    </div>
                    <div className="flex flex-wrap content-between justify-center w-1/3 bg-blue-300 hover:bg-blue-200 py-8 px-3 mx-5 rounded-lg shadow-md hover:shadow-xl">
                        <h1 className="text-yellow-50 font-medium text-4xl mb-5">by doing</h1>
                        <img src={project} className="w-4/5" alt="eye" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LandingPage;
