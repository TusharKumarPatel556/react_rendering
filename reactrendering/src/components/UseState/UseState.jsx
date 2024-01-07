import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(5);
  console.log("UseState Render");
  return (
    <div>
      <button type="" onClick={(e) => setCount((count) => count + 1)}>
        {count}
      </button>
      <button type="" onClick={(e) => setCount(0)}>
        set count 0
      </button>
      <button type="" onClick={(e) => setCount(5)}>
        set count 5
      </button>
    </div>
  );
};

export default UseState;
