import React from "react";
import './navbar.css'

export default function Navar() {
    
    return(
        <div>
            <header>
                    <div class="nav-wrapper">
                        <div class="logo-container">
                            <img class="logo" src="https://i.imgur.com/gea725J.png" alt="Logo"></img>
                        </div>
                        <nav>
                            <input class="hidden" type="checkbox" id="menuToggle"></input>
                            <label class="menu-btn" for="menuToggle">
                                
                                <div class="menu">
                                    <i class=" fs-1 mb-5 fa-solid fa-bars"></i>
                                </div>
                                
                            </label>
                            <div class="nav-container">
                                <ul class="nav-tabs">
                                    <li class="nav-tab">Home</li>
                                    <li class="nav-tab">Products</li>
                                    <li class="nav-tab">Services</li>
                                    <li class="nav-tab">FAQ</li>
                                    <li class="nav-tab">Contact</li>
                                    <li class="nav-tab">Careers</li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
        </div>
    )
}

Navar()


