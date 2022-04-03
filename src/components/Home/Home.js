import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from '../../img/my-img.jpg';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className='text'>
                    <h1>WELCOME TO MY PORTFOLIO...</h1>
                    <p><small>I am professional js developer from last year..</small></p>
                    <button className='btn'>Download CV <FontAwesomeIcon incon={faArrowDown}></FontAwesomeIcon></button>
                </div>
                <div className='img-container'>
                    <img src={img} alt="" />
                </div>
            </div>

            <div>
                hello world
            </div>
        </div>
    );
};

export default Home;