import React from 'react';
import "tailwindcss/tailwind.css";
import { Link } from 'react-router-dom';
import PreferenceCard from "../components/PreferenceCard";
import CoursesCard from "../components/CoursesCard";

function Results() {
    return (
        <div className="h-screen bg-yellow-50">
            <h1 className="font-black text-blue-500 text-center text-4xl p-8">Your Preferences</h1>
            <div className="flex flex-row content-between">
                <PreferenceCard
                    preferencetitle="Learning Style"
                    selection="Reading" />
                <PreferenceCard
                    preferencetitle="Difficulty"
                    selection="Advanced" />
                <PreferenceCard
                    preferencetitle="Duration"
                    selection="30 minutes" />
            </div>
            <h1 className="font-black text-blue-500 text-center text-4xl p-8">Your Courses</h1>
            <div>
                <CoursesCard
                    coursetitle="Intro to Python"
                    courselink="#" />
            </div>
        </div >
    );
}

export default Results;
