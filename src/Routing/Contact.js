
import React from 'react';
import "../assets/CSS/contact.css";
import Footer from "../components/Footer.js";
import office from '../assets/images/office.jpg';
import Header from '../components/Header';
import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';




const Contact = () => {
    return (
        <div class="contact">
            <div><Header/></div>

            <img src={office} width="400px" alt="office"/>
            <p>The Co-operative Group, trading as the Co-op, is a British consumer co-operative with a diverse family of 
            retail businesses including food retail and wholesale; e-pharmacy; 
            insurance services; legal services and funeral care.</p>
            <div className="form_design">
                <h2>Contact Us </h2>

                <form>
                    <label>
                        First Name:  &nbsp;&nbsp;
                        <input type="text" name="name" placeholder="Your first name.."/>
                    </label> <br/>

                    <label>
                        Last Name: &nbsp;&nbsp;
                        <input type="text" placeholder="Your last name.." name="name" />
                    </label> <br/>

                    <label for="country">Country  &nbsp;&nbsp;</label>
                    <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select> <br/>

                    <label>
                        Subject: &nbsp;&nbsp;
                        <input type="text" placeholder="Type here.."  />
                    </label> <br/>

                    
                    <input type="submit" value="Submit" />
                </form>
  
            </div>

            <div><Footer /></div>

            
        </div>


    );        
  };

export default Contact;
