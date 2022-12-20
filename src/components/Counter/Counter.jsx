import React, { useState } from "react";

import styles from "./counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = (prev) => {
    setCount(prev + 1);
  };

  const decreaseCount = (prev) => {
    setCount(prev - 1);
  };

  return (
    <div className={styles.counter}>
      <input
        type="button"
        onClick={() => increaseCount(count)}
        value="+"
        disabled={count < 10 ? false : true}
      />
      <p>Value {count}</p>
      <input
        type="button"
        onClick={() => decreaseCount(count)}
        value="-"
        disabled={count > 0 ? false : true}
      />
    </div>
  );
}

export default Counter;
