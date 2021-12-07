import React, { useState } from "react";
import "./Counter.css";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  function getCounterClass() {
    if (count > 0) return "positive"
    if (count < 0) return "negative"
    return ""
  }

  function changeCounter(value){
    setCount(count + value);
  }

  return (
    <div className="Counter">
      <div>
        <h2 className={getCounterClass()}>{count}</h2>
        <button className="Increment" onClick={() => changeCounter(1)}>Increment</button>
        <button className="Decrement" onClick={() => changeCounter(-1)}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
