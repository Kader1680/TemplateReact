import React from "react";
import './_navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png'



function Navbar() {
    
    return(
        
        <div class="Navbar d-flex align-items-center justify-content-center">
            <div class="logo" >
                <img src={logo} />
            </div>
            <div class="search ms-lg-5">
                <input />

                
            </div>
            <div class="item">
                <ul>
                    <li>Home</li>
                    <li>Browser</li>
                    <li>Details</li>
                    <li>Stream</li>
                    <li>Profile</li>
                </ul>
            </div>

            <button class='rounded-5'>ccccc</button>
        </div>

    )

}

export default Navbar;