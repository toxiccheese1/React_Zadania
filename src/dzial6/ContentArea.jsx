import React from "react";
export default function ContentArea({title, children})
{
    return(
        <>
        <h1>{title}</h1>
        <p>{children}</p>
        </>
    )
}