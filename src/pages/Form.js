import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css"
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

class Form extends Component {

    // const { register, handleSubmit } = useForm();

    // const onSubmit = data => {
    //     alert(JSON.stringify(data));
    // };

    constructor(props) {
        super(props)

        this.onChangeLearningStyle = this.onChangeLearningStyle.bind(this);
        this.onChangeDifficulty = this.onChangeDifficulty.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            learningStyle: '',
            difficulty: '',
            duration: ''
        }
    }

    onChangeLearningStyle(e) {
        this.setState({ learningStyle: e.target.value })
    }

    onChangeDifficulty(e) {
        this.setState({ difficulty: e.target.value })
    }

    onChangeDuration(e) {
        this.setState({ duration: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const formObject = {
            learningStyle: this.state.learningStyle,
            difficulty: this.state.difficulty,
            duration: this.state.duration
        };

        axios.post('/results', formObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
                alert(error)
            });

        this.setState({ learningStyle: '', difficulty: '', duration: '' })
    }

    render() {

        return (
            <div className="grid justify-items-center items-center bg-yellow-50 p-4 h-screen" >

                <div className="flex flex-col justify-items-center bg-blue-400 round-lg h-4/5 w-3/5 p-7 rounded-3xl shadow-lg">
                    <div className="relative -top-16 pb-4 pt-2 bg-blue-200 w-2/5 items-center mx-auto rounded-3xl">
                        <h1 className="text-6xl text-center font-black text-blue-900">Form</h1>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="col-span-6 sm:col-span-3">
                            <label for="learning-style"
                                className="block text-lg font-medium text-white">Learning Style:</label>
                            <select name="learning-style" onChange={this.onChangeLearningStyle}
                                className="my-3 block w-full py-2 px-3 border-0 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="visual">Visual (by seeing)</option>
                                <option value="read">Read/Write (by reading/writing)</option>
                                <option value="kinesthetic">Kinesthetic (by doing)</option>
                            </select>
                        </div>
                        {/* ref={register} */}
                        <div className="col-span-6 sm:col-span-3">
                            <label for="difficulty"
                                className="block text-lg font-medium text-white">Difficulty:</label>
                            <select name="difficulty" onChange={this.onChangeDifficulty}
                                className="my-3 block w-full py-2 px-3 border-0 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label for="duration"
                                className="block text-lg font-medium text-white">Time Commitment:</label>
                            <select name="duration" onChange={this.onChangeDuration}
                                className="my-3 block w-full py-2 px-3 border-0 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="5min">&gt; 5 Minutes</option>
                                <option value="15min">15 Minutes</option>
                                <option value="30min">30 Minutes</option>
                                <option value="45min">45 Minutes</option>
                                <option value="60min">&lt; 1 Hour</option>
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
}

export default Form;
