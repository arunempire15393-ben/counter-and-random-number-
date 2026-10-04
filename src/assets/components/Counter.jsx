 import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="utility-card">
      <h2>🔢 Counter</h2>

      <div className="count-display">
        {count}
      </div>

      {count === 0 && (
        <p className="message">
          Minimum limit reached
        </p>
      )}

      <div className="button-group">
        <button onClick={decrement}>− Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+ Increment</button>
      </div>
    </div>
  );
}

export default Counter;