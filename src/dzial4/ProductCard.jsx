import React from "react";
function ProductCard({title, description})
{
    return(
        <>
        <div>
            <code>
                <pre>
                    <h2>{title}</h2>
                    <p>{description}</p>  
                </pre>
              
            </code>
            
        </div>
        </>
        
    )
}
export default ProductCard 