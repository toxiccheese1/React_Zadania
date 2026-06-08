import React,{useState} from "react";

export default function Counter2()
{
    const [licznik, setLicznik] = useState(0);
    const dodaj = () =>
    {
        setLicznik(licznik + 1);
    }
    const odejmij = () =>
    {
        setLicznik(licznik - 1);
    }
    return(
        <>
        
            <p className={licznik >= 0 ? "styl1" : "styl2"}>{licznik}</p>
            <button onClick={dodaj}>Dodaj 1</button>
            <button onClick={odejmij}>Odejmij 1</button>
            <style>{`.styl1{color:green;} .styl2{color:red;}`}</style>
        </>
    )
}