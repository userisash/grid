import React, { useState } from "react";
import Data from "./store";

 export function Product(){
    const ProductCard =({title, imageUrl, price, size}) =>{
        return(
            <div className="product">
                <h1>{title}</h1>
                <img src={imageUrl} alt={title} />
                <p>{price}</p>
                <p>{size}</p>
            </div>
        )
    }

   const [Data, setData] = useState()
   




}

