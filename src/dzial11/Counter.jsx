import React,{useState} from "react";

export default function Counter()
{
    const [licznik, setLicznik] = useState(0);
    const dodaj = () =>
    {
        setLicznik(licznik + 1);
    }
    function odejmij()
    {
        if(licznik > 0)
        {
            setLicznik(licznik - 1);
        }
        else{
            alert("Nie można więcej odjąć ponieważ licznik jest równy 0", "OK");
        }
    }
    function reset()
    {
        setLicznik(0);
    }
    return(
        <>
            <p>{licznik}</p>
            <button onClick={dodaj}>Dodaj 1</button>
            <button onClick={odejmij}>Odejmij 1</button>
            <button onClick={reset}>Resetuj</button>
        </>
    )
}