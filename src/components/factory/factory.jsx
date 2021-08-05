import React from 'react'
import './factory.css';
import Factoryone from '../../assets/factoryone.jpg';
import Factorytwo from '../../assets/factorytwo.jpg';
import Factorythree from '../../assets/factorythree.jpg';
import Factoryfour from '../../assets/factoryfour.jpg';
import Factoryfive from '../../assets/factoryfive.jpg';

const Factory = () => {
    return (
        <div className="factory">
            <h1>Factory Photos</h1>
            <div className="factory__container">
            <img src={Factoryone} alt="factory images" />
            <img src={Factorytwo} alt="factory images" />
            <img src={Factorythree} alt="factory images" />
            <img src={Factoryfour} alt="factory images" />
            <img src={Factoryfive} alt="factory images" />
        </div>
        </div>
    )
}

export default Factory
