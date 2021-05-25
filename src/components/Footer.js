import React from 'react';
import logo from '../assets/images/logo.svg'
import '../assets/CSS/footer.css';
import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    return (
        <div className="social-footer">
                <div className="social-footer-left">
                    <a href="/"><img src={logo} height="40px"/></a>
                </div>
                <div className="social-footer-right">
                    <FaGithub size="2em" /> &nbsp;&nbsp;<FaFacebook size="2em"/>&nbsp;&nbsp; <FaTwitter size="2em"/>
                </div>
            </div>


    );        
  };

  export default Footer;