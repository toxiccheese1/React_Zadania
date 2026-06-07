import React from "react";

export default function LoginForm()
{
    return(
        <>
        <form>
  <label>
    Imię:
    <input type="text" name="name" />
    <style>
        {'body{color:white;}'}
    </style>
  </label>
  <input type="submit" value="Wyślij" />
</form>
            

        </>
    )
}