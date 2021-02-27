  
import React from 'react';

const Icons8 = ({ children, size = 48, alt = children }) => {
  const image = require(`../../assets/Images/icons8/${children}.png`);
  return (
    <>
      <img src={image} alt={alt} width={size} height={size} />
    </>
  );
};

export default Icons8;