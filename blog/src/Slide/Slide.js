import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../img/img1.jpg"
import img2 from "../img/img2.jpg"

import './Slide.css';

function Slide() {
    return (
        <>
          <Carousel className='main-slide'>
                <div>
                  <img src={img1} />                    
                </div>
                <div>
                  <img src={img2} />                    
                </div>
            </Carousel>
        </>
    );
}

export default Slide;

