import React, {useState} from "react";
import './header.css'

export default function Header({setshow}) {


    return(
        <header>
            <div onClick={()=>{setshow(true)}}>
                <a href="#/">
                    shopping card
                </a>
            </div>
            <div onClick={()=>{setshow(false)}}>
                <a href="#/cart">cart</a>
            </div>
        </header>
    )
}