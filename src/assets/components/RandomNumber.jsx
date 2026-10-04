 import { useState } from "react";

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="utility-card">
      <h2>🎲 Random Number Generator</h2>

      <div className="random-display">
        {randomNumber === null
          ? "No number generated yet"
          : randomNumber}
      </div>

      <button onClick={generateRandomNumber}>
        Generate Random Number
      </button>
    </div>
  );
}

export default RandomNumber;