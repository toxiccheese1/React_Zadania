import React,{useState} from "react";

export default function SimpleButton()
{
    const [changeColor, setChangeColor] = useState(true);
    const handleClick = () =>
    {
        setChangeColor(!changeColor);
    }
    const Color = ChangeColor ? "white" : "gray";
    return(
        <>
        <body style={{background:Color}}>
            <button onClick={handleClick}>Zmień kolor tła</button>
    <style>{`button{background-color:blue; border:none; border-radius:10px; height:30px; align-self:center; width:100px;}`}</style>  
    </body>
        </>
    )
}