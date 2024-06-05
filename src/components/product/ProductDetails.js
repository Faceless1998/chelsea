import React from "react";
import { useParams, Link } from "react-router-dom";
import { Options } from "./data";

const ProductDetails = () =>{

    const { id } = useParams();
    const option = Options.find( opt => opt.id.toString() === id );

    if(!option){
        return <div>პროდუქტი ვერ მოიძებნა</div>
    }

    return(
        <>
            <div>
                <h1> {option.phoneName} </h1>
                <img src={option.image} alt={option.phoneName} />
                <p> {option.price} </p>
            </div>

            <div>
                <Link to="/product">უკან დაბრუნება</Link>
            </div>
        </>
    )
}

export default ProductDetails;