import React from 'react';
import './About.css';

function About(props){
    console.log(props);
    return (
        <div className="about_container">
            <span>May be the force to be with you.</span>
            <span>--Starwars</span>
        </div>
    )
}

export default About;