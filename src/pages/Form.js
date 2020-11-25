import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css"
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { render } from '@testing-library/react';

function Form() {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        alert(JSON.stringify(data));
        fetch('http://127.0.0.1:5000/api/form', {
            method: 'POST',
            body: data
        }).then(function (response) {
            console.log(response)
            return response.json();
        });
    };

    return (
        <div className="grid justify-items-center items-center bg-yellow-50 p-4 h-screen">

            <div className="flex flex-col justify-items-center bg-blue-400 round-lg h-4/5 w-3/5 p-7 rounded-3xl shadow-lg">
                <div className="relative -top-16 pb-4 pt-2 bg-blue-200 w-2/5 items-center mx-auto rounded-3xl">
                    <h1 className="text-6xl text-center font-black text-blue-900">Form</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="topic"
                            className="block text-lg font-medium text-white">Topic:</label>
                        <input name="topic" ref={register}
                            className="form-input my-3 block w-full py-2 px-3 border-0 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter what you want to learn!">
                        </input>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="learning-style"
                            className="block text-lg font-medium text-white">Learning Style:</label>
                        <select name="learning-style" ref={register}
                            className="my-3 block w-full py-2 px-3 border-0 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="visual">Visual (by seeing)</option>
                            <option value="read">Read/Write (by reading/writing)</option>
                            <option value="kinesthetic">Kinesthetic (by doing)</option>
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="difficulty"
                            className="block text-lg font-medium text-white">Difficulty:</label>
                        <select name="difficulty" ref={register}
                            className="my-3 block w-full py-2 px-3 border-0 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="duration"
                            className="block text-lg font-medium text-white">Time Commitment:</label>
                        <select name="duration" ref={register}
                            className="my-3 block w-full py-2 px-3 border-0 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="5min">&lt; 5 Minutes</option>
                            <option value="15min">15 Minutes</option>
                            <option value="30min">30 Minutes</option>
                            <option value="45min">45 Minutes</option>
                            <option value="60min">&gt; 1 Hour</option>
                        </select>
                    </div>

                    <div className="m-auto space-x-64">
                        <Link to="/">
                            <button type="button" className="h-10 px-4 py-2 m-6 border border-transparent rounded-3xl shadow-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">back</button>
                        </Link>
                        {/* <Link to="/results"> */}
                        <button type="submit" className="h-10 px-4 py-2 m-6 border border-transparent rounded-3xl shadow-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">submit</button>
                        {/* </Link> */}
                    </div>
                </form>

            </div>

        </div >
    );
}

export default Form;
