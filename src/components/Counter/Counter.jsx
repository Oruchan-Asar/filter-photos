import React, { useEffect, useState } from "react";

import styles from "./counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(
    (prev) => {
      setCount(prev + 1);
    },
    [count]
  );

  return (
    <div className={styles.counter}>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Value {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
