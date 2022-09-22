import React from 'react'
import './myproduct.css'
export default function Myproduct({myitem, PushPro}) {

    // const  {id, Name, Price} = myitem

    return (
        <div class="pro">
            <p>{myitem.id}</p>
            <p>{myitem.Name}</p>
            <img src = {myitem.img}/>
            <button onClick={()=>PushPro(myitem)}>+</button>
            <button>-</button>
        </div>
            /* {
                products.map((product)=>{
                    

                    return(
                        <p>
                            <p>{product.id}</p>
                            <p>{product.Name}</p>
                            <p>{product.Price}</p>
                            <button>Add</button>
                            <button>remove</button>
                        </p>
                    )

                })
            } */
         
  )
}
                        // <p>{product.id}</p>
                        // <p>{product.Name}</p>
                        // <p>{product.Price}</p>
                        // <button>Add</button>
                        // <button>remove</button>