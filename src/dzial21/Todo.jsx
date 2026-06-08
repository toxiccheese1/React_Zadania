import React, { useState } from "react";
import './buttonStyles.css'
export default function Todo()
{
    const [Zad1, setZad1] = useState(true);
    const [Zad2, setZad2] = useState(true);
    const [Zad3, setZad3] = useState(true);
    return(
        <>
            <h2>Lista zadań</h2>
            <ul>
                <li id="z1" className={Zad1 ? "style1" : "style2"}>Wykosić trawę<input type="checkbox" onChange={() => setZad1(!Zad1)}></input><button>Usuń</button></li> 
                <li className={Zad2 ? "style1" : "style2"}>Naprawić zmywarkę<input type="checkbox" onChange={() => setZad2(!Zad2)}></input><button>Usuń</button></li>
                <li className={Zad3 ? "style1" : "style2"}>Wyremontować łazienke<input type="checkbox" onChange={() => setZad3(!Zad3)}></input><button>Usuń</button></li>
            </ul>
        </>
    )
}