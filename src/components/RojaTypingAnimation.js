import React, { useState, useEffect } from 'react';
import FallingPetals from './FallingPetals'; // Adjust path as needed

const RojaTypingAnimation = () => {
  const [text, setText] = useState(''); // Text being typed out
  const [started, setStarted] = useState(false); // Track if user started interaction
  const [isFloating, setIsFloating] = useState(false); // State to trigger floating effect
  const fullText = 'En Chella Kuttiye😍 en.kanmaniye🥰 ..Nee kaatum kobvam😠 kaadal🩷 Endren!!'; // Lovable text to type out

  useEffect(() => {
    if (started) {
      let index = 0;

      // Immediately set the first letter before starting the interval
      setText(fullText.charAt(0)); // Set first character immediately

      const timer = setInterval(() => {
        index++;
        if (index < fullText.length) {
          setText((prev) => prev + fullText.charAt(index)); // Add one character at a time
        } else {
          clearInterval(timer); // Clear the interval when typing is done
          setIsFloating(true); // Trigger floating effect
        }
      }, 300); // Typing speed

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
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-green-200 via-yellow-300 to-orange-400 overflow-hidden">
      <FallingPetals /> {/* Render falling petals */}
      {!started ? (
        <button
          onClick={() => setStarted(true)} // Start animation and music on click
          className="px-6 py-3 bg-white text-purple-500 font-bold rounded-lg shadow-md hover:bg-purple-100 transition duration-300"
        >
          Touch...!!
        </button>
      ) : (
        <h1
          className={`text-red-400 font-bold text-2xl sm:text-4xl lg:text-6xl font-mono border-r-4 border-white animate-blink max-w-[90%] md:max-w-[70%] lg:max-w-[60%] text-center mx-auto ${
            isFloating ? 'animate-floating' : ''
          }`}
          style={{ whiteSpace: 'pre-wrap' }} // Enable text wrapping
        >
          {text} {/* Display the typed-out text */}
        </h1>
      )}
    </div>
  );
};

export default RojaTypingAnimation;
