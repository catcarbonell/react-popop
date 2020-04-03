import React from 'react';

const About = () => {
    return(
        <div>
            <h2>About</h2>
            <p>
                This version of <a href="http://catcarbonell.github.io/popop" target="_blank">PopopJS</a>  
                &nbsp; is <strong>not</strong> a plugin, rather, a guide on how to create modals with React!
            </p>
            <p>
                This guide assumes you have a basic grasp of JavaScript (ES6) basics, more specifically,
                a working knowledge of constructing functions and classes.
            </p>
            <hr />
            <h2>Get Started!</h2>
            <p>You have a couple choices on how to go about getting modals on your React app:</p>
            <ul>
                <li>Clone <a href="http://github.com/catcarbonell/react-popop" target="_blank">this repo</a></li>
                <li>Copy and paste all the code snippets in this guide!</li>
            </ul>
        </div>
    );    
}

export default About;