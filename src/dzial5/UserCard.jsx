import React from "react";

export default function UserCard({name, role, avatarUrl, isOnline})
{
    return(
        <>
        <code>
            <pre>
                <div id="avatar">
                <h1>{name}</h1>
                <p>role</p>
                <img src={avatarUrl}/>
                <p>{isOnline}</p>    
                </div>
                
                <style>
                    {`img {width:100px};}`}
                </style>
            </pre>
        </code>
            
        </>
    )
}