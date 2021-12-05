import React, { useState, useEffect } from "react";

const MyComponent = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({ name: "Irawild", age: 46 });
    return () => {};
  }, []);

  return (
    <div>
      <h2>This is my first component, {user && user.name} </h2>
    </div>
  );
};

export default MyComponent;
