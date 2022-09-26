import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps{
    product : IProduct
}

export const Product = ({product} : ProductProps)=>{

    const [details, setDetails] = useState(false)
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img className="w-1/6" src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p className="font-bold">{product.price}</p>

            <button onClick={()=>{
                setDetails(details => !details);
             }} className={"px-4 py-2 border " + (details ? "bg-yellow-400" : "bg-blue-400")}>{ !details ? "Show details" : "Hide details" }</button> 

            {details && 
            <>
                <p>{product.description}</p> 
                <p>Rate: <span style={{fontWeight:"bold"}}>{product?.rating?.rate}</span></p>
            </>
            }
        </div>
    )
}