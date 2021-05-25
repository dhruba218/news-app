
import React from 'react';
import "../assets/CSS/about.css";
import ceo from '../assets/images/ceo.jpg';
import developer1 from '../assets/images/developer1.jpeg';
import developer2 from '../assets/images/developer2.jpg';
import Header from '../components/Header';



const About = () => {

    return (
        <div className="About">
            <div><Header/></div>

            <div class="row">         
              <div className="column">
                <div className="card">
                  <img src={ceo} height="300px"/>
                  <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">CEO & Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>jane@example.com</p>
                    <p><button className="button">Contact</button></p>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img src={developer1} height="300px"/>
                  <div class="container">
                    <h2>Mike Ross</h2>
                    <p class="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>


              <div class="column">
                <div class="card">
                <img src={developer2} height="300px"/>
                  <div class="container">
                    <h2>Pau Mill</h2>
                    <p class="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>john@example.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>
              </div>
               
        </div>
    );

};

export default About;
