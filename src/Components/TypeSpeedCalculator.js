import React, { useState, useEffect } from 'react';

const TypingSpeedCalculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [wpm, setWpm] = useState(0);

  // Handle typing event
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!isStarted && value.length > 0) {
      setStartTime(Date.now());
      setIsStarted(true);
    }
  };

  // Handle finish typing
  const handleFinishTyping = () => {
    if (isStarted) {
      setEndTime(Date.now());
    }
  };

  // Calculate WPM
  useEffect(() => {
    if (endTime) {
      const timeTaken = (endTime - startTime) / 1000; // time in seconds
      const wordsTyped = inputValue.trim().split(/\s+/).length;
      const calculatedWpm = (wordsTyped / timeTaken) * 60; // WPM formula
      setWpm(calculatedWpm.toFixed(2));
      setIsStarted(false);
    }
  }, [endTime, startTime, inputValue]);

  return (
    <div>
      <h2>Typing Speed Calculator</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Start typing..."
        disabled={endTime !== null}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={handleFinishTyping}
        disabled={!isStarted || endTime !== null}
        style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
        Finish Typing
      </button>
      {endTime && (
        <div>
          <h3>Your typing speed is {wpm} WPM</h3>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default TypingSpeedCalculator;
