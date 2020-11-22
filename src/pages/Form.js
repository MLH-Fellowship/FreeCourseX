import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css"
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

function Form() {

    // let mySubmitHandler = (event) => {
    //     event.preventDefault();
    //     alert("Gottem ");
    // }

    return (
        <div className="grid justify-items-center items-center bg-yellow-50 p-4 h-screen">

            <div className="flex flex-col justify-items-center bg-blue-400 round-lg h-4/5 w-4/5 p-7 rounded-3xl shadow-lg">
                <h1 className="relative text-6xl text-center -top-16 font-black text-blue-900">Form Page</h1>

                <form>
                    <div className="col-span-6 sm:col-span-3">
                        <label for="learning-style"
                            className="block text-lg font-medium text-white">Learning Style:</label>
                        <select id="learning-style"
                            className="my-3 block w-full py-2 px-3 border-0 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Visual (by seeing)</option>
                            <option>Read/Write (by reading/writing)</option>
                            <option>Kinesthetic (by doing)</option>
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label for="difficulty"
                            className="block text-lg font-medium text-white">Difficulty:</label>
                        <select id="difficulty"
                            className="my-3 block w-full py-2 px-3 border-0 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Advanced</option>
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label for="duration"
                            className="block text-lg font-medium text-white">Time Commitment:</label>
                        <select id="duration"
                            className="my-3 block w-full py-2 px-3 border-0 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>&gt; 5 Minutes</option>
                            <option>15 Minutes</option>
                            <option>30 Minutes</option>
                            <option>45 Minutes</option>
                            <option>&lt; 1 Hour</option>
                        </select>
                    </div>
                    <div className="flex justify-content-end">
                        <button type="button" className="h-10 px-4 py-2 m-6 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">submit</button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default Form;
