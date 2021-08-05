import React from 'react';
import './product.css';
import {Button} from '@material-ui/core'
import productiamge from '../../assets/product.png'
import productiamgeone from '../../assets/productone.png'
const Product = () => {
    return (
        <div className="products__container">
            <h1 className="title_product"> our product</h1>
            <div className="product__one" id="one">
                <div className="product__image">

                </div>
                <div className="product__details">
                    <p>CNC Lathe</p>
                    <h2>
                    High productivity & Compact Machine
                    </h2>
                    <p className="product__para">Heavy duty machine in a small footprint to improve production by increase cutting parameters and reducing non cutting time .</p>
                    <Button variant="contained">VIEW PRODUCT</Button>
                </div>
            </div>
            <div className="product__two" id="two">
            <div className="product__details">
                    <p>CNC Sliding Head Stock</p>
                    <h2>
                    Automatic Machine for 
                            Bar components </h2>
                    <p className="product__para">High speed machine for complete machining of bar type components in a single setup .</p>
                    <Button variant="contained">VIEW PRODUCT</Button>
                </div>
                <div className="product__image2">
                     <img src={productiamge} alt="product image" />
                </div>
            </div>
            <div className="product__three" id="three">
            <div className="product__image2">
                     <img src={productiamgeone} alt="product image" />
                </div>
                <div className="product__details">
                    <p>CNC Turn Mill Centre</p>
                    <h2>
                    Complex machining in a single setup to complete both turning and milling operations. </h2>
                    <p className="product__para">Compact 2 axis CNC lathe will deliver full load of  9 kw to 11 kw Spindle power, Realizes heavy duty cutting by rigid basic structure of single casting bed with 3.3 ton, Rapid indexing with servo hydraulic turret for heavy metal removal.</p>
                    <Button variant="contained">VIEW PRODUCT</Button>
                </div>
            </div>
        </div>
    )
}

export default Product
