import React from "react";
import './app.css'
export default function Alert()
{
    return(
        <>
            <p id="sukces">{Alert("Succes", "OK")}</p>
            <p id="ostrzez">{Alert("Warning", "OK")}</p>
            <p id="niebezp">{Alert("Danger", "OK")}</p>
        </>
    )
}