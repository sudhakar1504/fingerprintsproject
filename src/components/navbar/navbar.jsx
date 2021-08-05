import React,{useState} from 'react';
import './navbar.css';
import logo from '../.././assets/logo.png';
import {Call,MailOutline,ListRounded, Reorder} from '@material-ui/icons';
import {Button} from '@material-ui/core';
const Navbar = () => {
    const [navbarhide, setNavbarhide] = useState(false);
    const handlechange =()=>{
        setNavbarhide(!navbarhide)
    }
    return (
        <div className="navbar__container">
            <div className="info">
                <a href="tel:18001026246"><Call />1800 1026 246</a>
                <a href="mailto:info@tsugami.com"><MailOutline />info@tsugami.com</a>
            </div>
            <div className="navbar">
                <div className="navbar__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navbar__links" id={navbarhide ? "hidden" : ""}>
                    <a href="#one">CNC Lathe</a>
                    <a href="#two">CNC Sliding Head Stock</a>
                    <a href="#three">CNC Turnmill Centre</a>
                    <Button className="buttonicon" variant="contained" color="primary">
                         ENQUIRE NOW
                    </Button>
                   
                </div>
                <div className="hiddenbtn">
                   <button onClick={handlechange}><Reorder /></button>
                   </div>
            </div>
        </div>
    )
}

export default Navbar
