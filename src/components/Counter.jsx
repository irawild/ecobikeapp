import React, { useState } from "react";
import "./Counter.css";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  function getCounterClass() {
    if (count > 0) return "counter__title--increment"
    if (count < 0) return "counter__title--decrement"
    return ""
  }

  function changeCounter(value){
    setCount(count + value);
  }

  return (
    <div className="counter">
      <div>
        <h2 className={`counter__title ${getCounterClass()}`}>{count}</h2>
        <button className="counter__button counter__button--increment" onClick={() => changeCounter(1)}>Increment</button>
        <button className="counter__button counter__button--decrement" onClick={() => changeCounter(-1)}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
