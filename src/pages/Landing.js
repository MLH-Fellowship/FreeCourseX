import React from 'react';
import Landing from "../styles/index.js"
import landingimg from "../assets/landingimg.svg"

function LandingPage() {
    return (
        <Landing>
            <h1>FreeCourseX</h1>
            <h3>courses your way</h3>
            <img src={landingimg}></img>

        </Landing>
    );
}

export default LandingPage;
