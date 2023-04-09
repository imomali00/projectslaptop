import React, { useRef, useState, useEffect } from "react";

function setDefaultValue() {
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}

const Timer = () => {
  const [count, setCount] = useState(setDefaultValue());
  const [isCounting, setIsCounting] = useState(false);
  const timerIdRef = useRef(null);

  const handleStart = () => {
    setIsCounting(true);
    timerIdRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerIdRef.current);
    setIsCounting(false);
  };
  const handleReset = () => {
    setCount(0);
    setIsCounting(false);
  };

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    };
  }, [isCounting]);

  return (
    <>
      <header>
        <div className="div">
          <h1>React timer: {count}</h1>
          {!isCounting ? (
            <button onClick={handleStart}>
              <span>Start</span>
            </button>
          ) : (
            <button onClick={handleStop}>
              <span>Stop</span>
            </button>
          )}
          <button onClick={handleReset}>
            <span>Reset</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Timer;
