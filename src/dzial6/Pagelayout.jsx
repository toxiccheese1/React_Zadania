import React from "react";
import SideBar from "./sidebar.jsx";
import ContentArea from "./ContentArea.jsx";
export default function PageLayout()
{
    return(
        <>
        <ContentArea title="Jak skutecznie pozbyć się Szczurów?">Więc to proste, udaj się do specjalisty! A tu masz przepis na gofry: 
        Mąkę wsypać do miski, dodać proszek do pieczenia, sól, cukier, cukier wanilinowy. 
        Wszystko wymieszać. Dodać mleko, jajka oraz olej roślinny lub roztopione masło. 
        Zmiksować mikserem lub wymieszać rózgą na gładką masę.</ContentArea>
        <SideBar><a href="https://aniagotuje.pl/przepis/gofry">Przepis na gofry od pani ani</a></SideBar>
        <div classname="footer">
        </div>
        </>
       
    )
}