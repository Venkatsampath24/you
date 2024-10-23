// FallingPetals.js
import React from 'react';
import Petal from './Petal'; // Adjust the path based on your folder structure

const FallingPetals = () => {
  const petalCount = 20; // Change this number to increase/decrease petal count

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {Array.from({ length: petalCount }).map((_, index) => (
        <Petal key={index} />
      ))}
    </div>
  );
};

export default FallingPetals;
