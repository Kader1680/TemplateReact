import React from "react";
import './style/home.css'
import brand1 from '../images/brand-01.png'
import brand2 from '../images/brand-02.png'
import brand3 from '../images/brand-03.png'
import brand4 from '../images/brand-04.png'
import brand5 from '../images/brand-05.png'
import brand6 from '../images/brand-06.png'
import brand7 from '../images/brand-07.png'
import brand8 from '../images/brand-08.png'

import 'bootstrap/dist/css/bootstrap.css';

export default class Footer extends React.Component {
    
    render(){
        return(
            <div className=" container">

                <div className=" head text-center ">
                    <div className=" title ">
                        Our company About Details
                    </div>
                    <h2 class="mt-5">
                        We Are A Corporate Business Agency.
                    </h2>
                </div>
                {/* <button class="rounded-5">Click now</button> */}
                <div class="smallBody row pb-5 pt-5">
                    <div class="lorem text-white col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    We are creative digital agency working for our company brands.
                    </div>
                    <div class="def col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quis. Ullam accusantium dignissimos repellendus nemo fugiat numquam, nisi odio adipisci. Veniam neque itaque expedita officiis rem ipsa! Ratione, rem reiciendis?
                    </div>
                    <div class="feature row">
                        <img src={brand1} class="col-sm-6 col-md-6" />
                        <img src={brand2} class="col-sm-4 col-md-4" />
                        <img src={brand3} class="col-sm-6 col-md-4" />
                        <img src={brand4} class="col-sm-6 col-md-4" />
                        <img src={brand5} class="col-sm-6 col-md-4" />
                        <img src={brand6} class="col-sm-6 col-md-4" />
                        <img src={brand7} class="col-sm-6 col-md-4" />
                        <img src={brand8} class="col-sm-6 col-md-4" />
                    </div>
                </div>

            </div>
            
        )
    }
}