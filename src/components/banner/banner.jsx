import React from 'react';
import {Button} from '@material-ui/core'
import './banner.css';

const Banner = () => {
    return (
        <div className="banner__container">
            <div className="title">
                <h1>Superior Precision </h1>
                   <h1> Machine Tools.</h1>
                <p>We provide high-precision, high-speed and high-rigidity products in line with customers’ needs.</p>
                <Button variant="contained">ENQUIRE NOW</Button>
            </div>
        </div>
    )
}

export default Banner
