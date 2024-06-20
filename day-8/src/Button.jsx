import React, { useState } from 'react';
// import './Button.css'; 

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state
  };

  return (
    <button className={isClicked ? 'clicked' : ''} onClick={handleClick}>
      Click Me
    </button>
  );
};

export default Button;
