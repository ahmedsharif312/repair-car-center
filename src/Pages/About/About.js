import React from 'react';
// import { Helmet } from 'react-helmet-async';
import PageHelmat from '../Shared/PageHelmate/PageHelmat';

const About = () => {
    return (
        <div>
            {/* this is 1 first option */}
            {/* <Helmet>
                <title>About - Repair Care</title>
            </Helmet> */}

            {/* this is 2 second option */}
            <PageHelmat title='About' />
            <h1> About us</h1>
        </div>
    );
};

export default About;