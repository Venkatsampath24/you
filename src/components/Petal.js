// Petal.js
import React from 'react';

const Petal = () => {
  // Randomly generate starting position for each petal
  const startPosition = Math.random() * 100; // Random horizontal position (0% to 100%)
  const size = Math.random() * 10 + 10; // Random size between 10px and 20px
  const fallDuration = Math.random() * 5 + 3; // Random fall duration between 3s and 8s

  const petalStyle = {
    position: 'absolute',
    top: '-20px', // Start above the viewport
    left: `${startPosition}%`, // Random horizontal position
    width: `${size}px`, // Random width
    height: `${size}px`, // Random height
    background: 'url("/Rosepetals.png") no-repeat center center / contain', // Correct image path from public folder
    opacity: 0.8,
    animation: `fall ${fallDuration}s linear infinite`, // Randomize fall duration
  };

  return <div style={petalStyle} />;
};

export default Petal;
