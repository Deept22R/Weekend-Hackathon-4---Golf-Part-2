import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: 0,
    top: 0,
  });
  const start = () => {
    setRenderBall(true);
  };
  const reset = () => {
    setRenderBall(false);
  };
  const keyPress = (event)=>{
    switch(event.keyCode)
    {
       case 39:
                setBallPosition({
                    left: ballPosition.left + 5,
                    top: ballPosition.top, 
                });
                break;
            case 40:
                setBallPosition({
                    left: ballPosition.left,
                    top: ballPosition.top+5,
                });
                break;
            case 37:
                setBallPosition({
                    left: ballPosition.left-5,
                    top: ballPosition.top,
                });
                break;
            case 38:
                setBallPosition({
                    left: ballPosition.left,
                    top: ballPosition.top-5,
                })
              }
  }
  useEffect(()=>{
    document.addEventListener("keydown",keyPress);
    return()=>{
      document.removeEventListener("keydown",keyPress);
    }
  },[ballPosition]);
  const renderChoice = () => {
    if (renderBall == true) {
      return (
        <div
          className="ball"
          style={{
            left: ballPosition.left + "px",
            top: ballPosition.top + "px",
            position: "absolute",
          }}
        ></div>
      );
    } else
      return (
        <button onClick={start} className="start">
          Start
        </button>
      );
  };

  return (
    <>
      <div className="playground">
        <button onClick={reset} className="reset">
          Reset
        </button>
        {renderChoice()}
      </div>
    </>
  );
};

export default App;
