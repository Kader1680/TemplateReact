import React from "react";
import './_navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    
    return(
        
        <div class="Navbar d-flex align-items-center justify-content-center">
            <div class="logo" >Logo</div>
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

            
        </div>

    )

}

export default Navbar;