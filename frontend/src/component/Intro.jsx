import React from 'react';
import './Intro.scss';
import image from '../images/person.png';

const Intro = () => {
    return (
        <div className='intro' id='intro'>
            <img src={image} alt=''/>



            <div className="profession">


                <h3>Hey There, I'M</h3>
                <h1>SAGAR LOBHE</h1>

                <h1>
                <span>I'M</span>
             <div class="message">
             <div class="word1">WEB DEVELOPER</div>
             <div class="word1">WEB DEVELOPER</div>
             <div class="word1">WEB DEVELOPER</div>


            </div>
             </h1>




            </div>
            
        </div>
    );
};

export default Intro;