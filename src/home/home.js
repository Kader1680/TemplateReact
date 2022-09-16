import React from "react";
import '../sass/_home.scss';
import brand1 from '../images/brand-01.png'
import brand2 from '../images/brand-02.png'
import brand3 from '../images/brand-03.png'
import brand4 from '../images/brand-04.png'
import brand5 from '../images/brand-05.png'
import brand6 from '../images/brand-06.png'
import brand7 from '../images/brand-07.png'
import brand8 from '../images/brand-08.png'
import Cont from '../images/contact-image.jpg'
import t1 from '../images/team-dark-01.jpg'
import t2 from '../images/team-dark-02.jpg'
import t3 from '../images/team-dark-03.jpg'
import t4 from '../images/team-dark-04.jpg'


import 'bootstrap/dist/css/bootstrap.css';

export default class Footer extends React.Component {
    
    render(){
        return(
            <div className="home container">

                

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
                </div>
                <div class="feature row ">
                    <img src={brand1} class="row col-xs-4" />
                    <img src={brand2} class="row col-xs-4" />
                    <img src={brand3} class="row col-xs-4" />
                    <img src={brand4} class="row col-xs-4" />
                    <img src={brand5} class="row col-xs-4" />
                    <img src={brand6} class="row col-xs-4" />
                    <img src={brand7} class="row col-xs-4" />
                    <img src={brand8} class="row col-xs-4" />

                </div>




                {/* BLOG PUBLICATION */}

                <div class="row publication">
                    <div class="row col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img src={Cont}  />
                    </div>
                    <div class="row col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h2>Doob specializes in small Corporate Business.</h2>
                        <div class="chart text-white mb-sm-5">
                            <span class="done p-2 "><i class="fa-solid fa-check"></i></span>
                            <span class="ms-3 fs-5 fw-bold">A good traveler has no fixed plans</span>
                            <div class="ms-5">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.</div>
                        </div>
                        <div class="chart text-white">
                            <span class="done p-2"><i class="fa-solid fa-check"></i></span>
                            <span class="ms-3 fs-5 fw-bold">A good traveler has no fixed plans</span>
                            <div class="ms-5">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.</div>
                        </div>
                        <button>About Our Doop</button>
                    </div>
                </div>





                {/* BLOG NUMBER */}

                <div class="number row text-center">
                    <div class="fs-1 fw-bolder mt-3 field row col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <span>+199</span>
                        <div class="text-white">Happy Clients</div>
                    </div>
                    <div class="fs-1 fw-bolder mt-3 field row col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <span>+199</span>
                        <div class="text-white">Happy Clients</div>
                    </div>
                    <div class="fs-1 fw-bolder mt-3 field row col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <span>+199</span>
                        <div class="text-white">Happy Clients</div>
                    </div>
                    <div class="fs-1 fw-bolder mt-3 field row col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <span>+199</span>
                        <div class="text-white">Happy Clients</div>
                    </div>
                </div>


                {/* BLOG TEAM */}


                <div class="team row text-center">
                    <div class="a fs-1 fw-bolder mt-3 field row col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <img class="people" src={t1} />
                    </div>

                    <div class="fs-1 fw-bolder mt-3 field row col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <img src={t2} />
                    </div>
                    <div class="fs-1 fw-bolder mt-3 field row col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <img src={t3} />
                    </div>
                    <div class="fs-1 fw-bolder mt-3 field row col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <img src={t4} />
                    </div>
                    
                </div>



            </div>
            
        )
    }
}