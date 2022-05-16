import React from 'react';
import PageHelmat from '../../Shared/PageHelmate/PageHelmat';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <PageHelmat title='Home' />
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;