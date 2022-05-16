import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageHelmat = ({ title }) => {
    return (
        <Helmet>
            <title>{title} - Repair Car Service</title>
        </Helmet>
    );
};

export default PageHelmat;