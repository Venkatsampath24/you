import React, { useState, useEffect } from 'react';
import FallingPetals from './FallingPetals'; // Adjust path as needed

const RojaTypingAnimation = () => {
  const [text, setText] = useState(''); // Text being typed out
  const [started, setStarted] = useState(false); // Track if user started interaction
  const [isFloating, setIsFloating] = useState(false); // State to trigger floating effect
  const fullText = 'Roja🌹!!'; // Lovable text to type out

  useEffect(() => {
    if (started) {
      let index = 0;

      // Immediately set the first letter before starting the interval
      setText(fullText.charAt(0)); // Set "R" immediately

      const timer = setInterval(() => {
        index++;
        if (index < fullText.length) {
          setText((prev) => prev + fullText.charAt(index)); // Add one character at a time
        } else {
          clearInterval(timer); // Clear the interval when typing is done
          setIsFloating(true); // Trigger floating effect
        }
      }, 500); // Typing speed

      // Play background music when user clicks start
      const audio = new Audio('/Chellakuttiye.mp3');
      audio.play();

      // Cleanup timer and audio on component unmount
      return () => {
        clearInterval(timer);
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [started, fullText]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400">
      <FallingPetals /> {/* Render falling petals */}
      {!started ? (
        <button
          onClick={() => setStarted(true)} // Start animation and music on click
          className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-purple-500 font-bold rounded-lg shadow-md hover:bg-purple-100 transition duration-300"
        >
          Touch...!!
        </button>
      ) : (
        <h1
          className={`text-red-400 font-bold text-6xl sm:text-9xl lg:text-[10rem] font-mono border-r-4 border-white animate-blink whitespace-nowrap overflow-hidden ${isFloating ? 'float' : ''}`}
        >
          {text} {/* Display the typed-out text */}
        </h1>
      )}
    </div>
  );
};

export default RojaTypingAnimation;
