import React, { useState } from "react";

export default function RegisterForm()
{
    const [text1, setText1] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [status, setStatus] = useState(false);
    return(
        <>
        <form>
           <input id="email" placeholder="Wpisz email" type="email" onChange={() =>setText1(email.value)}></input>
            <input type="password" id="pass1" placeholder="Wpisz hasło" onChange={() =>setPassword1(pass1.value)}></input>
            <input type="password" id="pass2" placeholder="Wpisz ponownie hasło" onChange={() =>setPassword2(pass2.value)}></input>
            <button type="submit" disabled={!(text1.includes('@') >0 &&password1.length >=8 && password1 == password2)}>Zarejestruj</button>
        </form>
        </>
    )
}