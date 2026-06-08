import React, { useState } from "react";

export default function RegisterForm()
{
    const [text1, setText1] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    return(
        <>
        <form>
           <input id="email" placeholder="Wpisz email" type="email" onChange={() =>setText1(miabuelo.value)}></input>
            <input type="password" id="pass1" placeholder="Wpisz hasło" onChange={() =>setPassword1(pass1.value)}></input>
            <input type="password" id="pass2" placeholder="Wpisz ponownie hasło" onChange={() =>setPassword2(pass2.value)}></input>
            <button id="button1" disabled={(text1.includes("@") && password1 >=8 && password2 == password1)? false : false }>Zarejestruj</button>
        </form>
            <style>
                {`#komunikat1{color:red;} #komunikat2{color:green;}`}
            </style>
        </>
    )
}