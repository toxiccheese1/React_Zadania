import React, { useState } from 'react';

const InteractiveCard = () => {
    const handleClick = () =>{
        alert("Chipsy lays", "OK");
    }
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const Color = isHovered ? 'red' : 'black';

  return (
    <>
    <body style={{background:Color}}>
    <h1>Chipsy lays</h1>
    <p>Chipsy lays o smaku bekonowym idealne do grilla, filmu czy spotkania</p>
    <button onClick={handleClick}>Wyświetl</button><br/>
    <h2
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Zmień kolor tła
    </h2>  
    <style>{`button{background-color:blue; border:none; border-radius:10px; height:30px; align-self:center; width:100px;}`}</style>  
    </body>
    
    </>
    
  );
};

export default InteractiveCard;