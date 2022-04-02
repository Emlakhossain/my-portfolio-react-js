import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-item'>
                <h4>WAXON</h4>
                <h4>PORTFOLIO THEME</h4>
            </div>
            <div className='footer-item'>
                <h4>Gulshan-2,</h4>
                <h4>Dhaka-1212, Bangladesh</h4>
            </div>
            <div className='footer-item'>
                <h4>imran@gmail.com</h4>
                <h4> +8801740284295</h4>
                <h4>+8801926002525</h4>
            </div>
            <div className='footer-item'>
                <div className='icon'>
                    <p>
                        <Link to="/home"> <FontAwesomeIcon icon={faUser} /></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;