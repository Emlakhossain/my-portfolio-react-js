import React from 'react';
import img from '../../img/not-found.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found-page'>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;