import * as React from 'react';
import "../assets/CSS/home.css";
import logo from '../assets/images/logo.svg';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import Header from '../components/Header';



const Home = () => {
    
    
    return (
        <div className="home">
        
            <div><Header/></div>

            
            <div><h2>Today's broadcast</h2></div> <hr/>
            <div class="row">         
                <div className="column">
                    <div className="card">
                        <img src={img1} height="300px"/>
                        <div className="container">
                            <h2>India keeps a close watch on China's 'emerging' role in Afghanistan</h2>
                            <div className="text_adjust">India is keeping a close watch as China takes the lead to mediate in Afghanistan as the US prepares 
                                to withdraw from the landlocked nation.While China has earlier tried to broker peace and even hosted the 
                                Taliban in the past, this is the first time that the initiative has been made at the ministerial level 
                                indicating Beijing's intention to be active in the Afghan</div>
                            <button>Read More...</button>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={img5} height="300px"/>
                        <div className="container">
                            <h2>Apple puts more adverts in App Store after ad-tracking ban</h2>
                            <div className="text_adjust">India is keeping a close watch as China takes the lead to mediate in Afghanistan as the US prepares 
                                to withdraw from the landlocked nation.While China has earlier tried to broker peace and even hosted the 
                                Taliban in the past, this is the first time that the initiative has been made at the ministerial level 
                                indicating Beijing's intention to be active in the Afghan</div>
                            <button>Read More...</button>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={img4} height="300px"/>
                        <div className="container">
                            <h2>India keeps a close watch on China's 'emerging' role in Afghanistan</h2>
                            <div className="text_adjust">India is keeping a close watch as China takes the lead to mediate in Afghanistan as the US prepares 
                                to withdraw from the landlocked nation.While China has earlier tried to broker peace and even hosted the 
                                Taliban in the past, this is the first time that the initiative has been made at the ministerial level 
                                indicating Beijing's intention to be active in the Afghan</div>
                            <button>Read More...</button>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={img3} height="300px"/>
                        <div className="container">
                            <h2>India keeps a close watch on China's 'emerging' role in Afghanistan</h2>
                            <div className="text_adjust">India is keeping a close watch as China takes the lead to mediate in Afghanistan as the US prepares 
                                to withdraw from the landlocked nation.While China has earlier tried to broker peace and even hosted the 
                                Taliban in the past, this is the first time that the initiative has been made at the ministerial level 
                                indicating Beijing's intention to be active in the Afghan</div>
                            <button>Read More...</button>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={img2} height="300px"/>
                        <div className="container">
                            <h2>India keeps a close watch on China's 'emerging' role in Afghanistan</h2>
                            <div className="text_adjust"><firstletter>I</firstletter>ndia is keeping a close watch as China takes the lead to mediate in Afghanistan as the US prepares 
                                to withdraw from the landlocked nation.While China has earlier tried to broker peace and even hosted the 
                                Taliban in the past, this is the first time that the initiative has been made at the ministerial level 
                                indicating Beijing's intention to be active in the Afghan</div>
                            <button>Read More...</button>
                        </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <img src={img6} height="300px"/>
                        <div className="container">
                            <h2>India keeps a close watch on China's 'emerging' role in Afghanistan</h2>
                            <div className="text_adjust"><firstletter>I</firstletter>ndia is keeping a close watch as China takes the lead to mediate in Afghanistan as the US prepares 
                                to withdraw from the landlocked nation.While China has earlier tried to broker peace and even hosted the 
                                Taliban in the past, this is the first time that the initiative has been made at the ministerial level 
                                indicating Beijing's intention to be active in the Afghan</div>
                            <button>Read More...</button>
                        </div>
                    </div>
                </div>

                

            </div>
            
        </div>


        
    );

};

export default Home;