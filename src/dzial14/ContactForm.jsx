import React, { useState } from "react";

export default function ContactForm()
{
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    return(
        <>
        <form>
           <input id="miabuelo" placeholder="Wpisz email" type="text" onChange={() =>setText1(miabuelo.value)}></input>
            <textarea id="tekstarea" placeholder="Wpisz wiadomość" onChange={() =>setText2(tekstarea.value)}></textarea>
            <button id="button1" disabled={(text1.length != 0 && text2.length != 0)? false : true}>Wyślij</button>
            <p>{text2}</p> 
        </form>
            
        </>
    )
}