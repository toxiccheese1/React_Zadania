import React,{useState} from "react";

export default function CartCounter()
{   
    const [licznikRzeczy, setLicznikRzeczy] = useState(0);
    const dodaj = () =>
    {
        setLicznikRzeczy(licznikRzeczy + 1);
    }
    const dodaj_5 = () =>
    {
        setLicznikRzeczy(licznikRzeczy + 5);
    }
    const podwoj = () =>
    {
        setLicznikRzeczy(licznikRzeczy * 2);
    }
    const usun = () =>
    {
        if(licznikRzeczy > 0)
        {
            setLicznikRzeczy(licznikRzeczy - 1);
        }
        else{
            alert("Nie można więcej odjąć ponieważ licznik jest równy 0", "OK");
        }
    }
    return(
        <>
            <p>{licznikRzeczy}</p>
            <button onClick={dodaj}>Dodaj</button>
            <button onClick={dodaj_5}>Dodaj 5</button>
            <button onClick={podwoj}>Podwój</button>
            <button onClick={usun}>Usuń</button>
        </>
    )
}