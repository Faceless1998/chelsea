import React from "react";
import { useParams, Link } from "react-router-dom";
import { Options } from "./data";

const ProductDetails = () =>{

    const { id } = useParams();
    const option = Options.find( opt => opt.id.toString() === id );

    if(!option){
        return <div>პროდუქტი ვერ მოიძებნა</div>
    }

let namer
    if (localStorage.getItem("lang") === "en") {
        namer = (
          <div>{option.phoneName} </div>
        );
      } else if (localStorage.getItem("lang") === "ge") {
        namer = (
          <div>{option.phoneNameGeo} </div>
        );
      } else {
        namer = (
          <div>{option.phoneNameSp} </div>
        );
      }

    return(
        <>
            <div>
                <h1> {namer} </h1>
                <img src={option.image} alt={option.phoneName} />
                <p> {option.price} </p>
            </div>

            <div>
                <Link to="/product">
                
                
                {localStorage.getItem("lang") === "ge"
                      ? "უკან დაბრუნება"
                      : localStorage.getItem("lang") === "en"
                      ? "Go Back"
                      : "Devolver"}
                      
                      </Link>
            </div>
        </>
    )
}

export default ProductDetails;