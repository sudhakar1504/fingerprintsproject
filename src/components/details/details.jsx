import React from 'react';
import { Slider, RangeSlider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './details.css'

 

const Details = () => {
    return (
        <div className="details__container">
             <div className="details__info">
                 <div className="heading__title">
                     <h1>Accuracy, Speed & </h1>
                     <h1>Rigidity</h1>
                 </div>
                 <div className="para__title">
                     <p>In the face of rapidly changing technology, we recognize the need to continuously improve overall performance. That is why we are focusing all of our efforts on research and development.</p>
                     <p>Looking ahead, we take on board direct feedback from customers and anticipate their needs, so that we can maintain our focus on product development, with an emphasis on automatic lathes, grinding machines, machining centers and other high-precision machinery. We continue providing products that guarantee customer satisfaction</p>
                 </div>
             </div>
             <div className="slider">
                    <Slider
                    renderMark={mark => {
                        return mark;
                      }}
         defaultValue={1953}
        min={1923}
            step={10}
      max={1977}
      graduated
      progress
      
    /> 
             </div>
             <div className="slider__info">
                 <h1>Block Gauge Research</h1>
                <p>Research of block gauge was initiated at Honjo Ohira-cho in Tokyo</p>
             </div>
        </div>
    )
}

export default Details
