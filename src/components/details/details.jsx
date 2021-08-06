import React,{useState,useEffect} from 'react';
import { Slider, RangeSlider } from 'rsuite';
import {ArrowRight,ArrowLeft, ArrowBackIos, ArrowForwardIos} from '@material-ui/icons'
import 'rsuite/dist/styles/rsuite-default.css';
import './details.css'

 

const Details = () => {
  
    const [valuee, setValuee] = useState(1933);
    const addyear =() =>{
        setValuee(valuee +10);
        console.log(valuee);
    }
    const lessyear =() =>{
        setValuee(valuee -10);
        console.log(valuee);
    }
    
  
       
   
      
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
            <div className="slider__container">
                <button onClick={lessyear}><ArrowBackIos /></button>
                <div className="slider">
                    <Slider
                    renderMark={mark => {
                        return mark;
                      }}
        value={valuee}
        min={1923}
         step={10}
      max={1977}
      onChange={e => setValuee(e)}
      graduated
      progress
      
    /> 
             </div>
             <button onClick={addyear}><ArrowForwardIos /> </button>
            </div>
             <div className="slider__info">
                 <h1>Block Gauge Research</h1>
                <p>Research of block gauge was initiated at Honjo Ohira-cho in Tokyo</p>
             </div>
        </div>
    )
}

export default Details
