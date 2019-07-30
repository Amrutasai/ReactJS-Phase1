import React from 'react';
import './Header.css'
const Header=(props)=>
{
    return (
        <div class="navbar">
            <a href="#home">Home</a>
            <div class="drop">
                <button class="dropbtn">About </button>
                <div class="drop-content">
                <a href="#">Overview</a>
                <a href="#">Managing Committee</a>
                <a href="#">Vision and Mission</a>
            </div>
        </div> 
        <div class="drop">
            <button class="dropbtn">Academics </button>
            <div class="drop-content">
            <a href="#">Computer Engineering</a>
            <a href="#">Mechanical Engineering</a>
            <a href="#">Electronics and Telecommunications</a>
            </div>
        </div> 
        <a href='#admission'>Admission</a>
        <a href='#admission'>Carrers</a>
        <div><img src="http://www.siesgst.edu.in/assets/gst.png"></img></div>
        <div class="drop">
            <button class="dropbtn">Amenities </button>
            <div class="drop-content">
            <a href="#">Library</a>
            <a href="#">Intranet</a>
            </div>
        </div> 
        <div class="drop">
            <button class="dropbtn">Life @ GST </button>
            <div class="drop-content">
            <a href="#">Student council</a>
            <a href="#">Student Chapter</a>
            </div>
        </div> 
        <a href='#admission'>CIIED</a>
        <a href='#admission'>Alumni</a>
        <a href='#admission'>Contact Us</a>






</div>
    )
}

export default Header