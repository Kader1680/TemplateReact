import React, {useState} from "react";

import './main.css'
import products from './data'
import Myproduct from "./myproduct";

export default function Main() {


    const [prdct, setprodct] = useState(...products);

    const PushPro = () => {
        // setprodct([...prdct])
        console.log(prdct)
        // document.body.innerHTML = prdct
    }

    return(
       
        
        <div>
        {
            products.map((item)=>{
                return(
                    <Myproduct key={item.id} myitem={item} PushPro={PushPro} ></Myproduct>
                    
                )
                 
            })
        }
        </div>
        
    )
}