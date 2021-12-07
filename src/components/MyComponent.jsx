import React, { useState, useEffect } from "react";
import './MyComponent.css'

const MyComponent = (props) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   setUser({ name: "Irawild", age: 46 });
  //   return () => {};
  // }, [user]);

  function setAge (age) {
      debugger
    setUser({...user, age: age});
  }

  return (
    <div className="myComponent">
        <div>
            <input type="number" value={user && user.age} onChange={(e) => setAge(+e.target.value)} />
        </div>
      <h2>This is my first component, {user && user.name} </h2>
    </div>
  );
};

export default MyComponent;
