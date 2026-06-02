import React from "react";

export default function UserProfile({name, email, bio, website, isPremium, followerCount})
{
    const isHigh = false;
    function Sprawdz(){
        
        if(followerCount > 999){
            isHigh = true;
        }
        return isHigh;
    }
    return(
        <>
        <div className="snippet-header">
        <code>
            <pre>
             <h2>{name}<br/> {email} <br/>{bio} <br/>{website} </h2>
            <span>
            {isPremium?<p>Premium</p>:<p>Non-Premium</p>}
            <p>Obserwujący: </p>
            {isHigh?<p>999+</p>:<p>{followerCount}</p> }
                
            </span>   
            </pre>
            
            
        </code>    
        </div>
        
        </>
    )
}