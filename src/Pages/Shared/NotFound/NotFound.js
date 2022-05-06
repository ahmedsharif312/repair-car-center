import React from 'react';
import notFound from '../../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2>Not Found</h2>
            <img src={notFound} width="40%" alt="" />
        </div>
    );
};

export default NotFound;