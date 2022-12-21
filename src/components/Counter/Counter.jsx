import { Button } from "@mui/material";
import React from "react";

import styles from "./counter.module.css";

function Counter({ count, setCount }) {
  const increaseCount = (prev) => {
    setCount(prev + 1);
  };

  const decreaseCount = (prev) => {
    setCount(prev - 1);
  };

  return (
    <div className={styles.counter}>
      <Button
        variant="contained"
        onClick={() => decreaseCount(count)}
        disabled={count > 0 ? false : true}
      >
        -
      </Button>
      Value {count}
      <Button
        variant="contained"
        onClick={() => increaseCount(count)}
        disabled={count < 10 ? false : true}
      >
        +
      </Button>
    </div>
  );
}

export default Counter;
