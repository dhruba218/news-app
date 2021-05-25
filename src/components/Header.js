import React from 'react';
import logo from '../assets/images/logo.svg'
import '../assets/CSS/header.css';



const Header = () => {

    return (
        <div className="header">
            <a href="/" className="logo"> <img src={logo} height="40px"/> </a>
            <div className="header-right">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>

    );        
  };

  export default Header;