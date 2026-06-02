import React from "react";
import '/src/index.css';
export default function ProductImage({image})
{
    return(
        <>
        <div className="Imagegallery">
            <img src={image} width={300} />
        </div>
            
        </>
        
    )
}