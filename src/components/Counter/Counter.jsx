import { Button, createTheme, ThemeProvider } from "@mui/material";
import React from "react";

import styles from "./counter.module.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Counter({ count, setCount }) {
  const increaseCount = (prev) => {
    setCount(prev + 1);
  };

  const decreaseCount = (prev) => {
    setCount(prev - 1);
  };

  return (
    <div className={styles.counter}>
      <ThemeProvider theme={darkTheme}>
        <Button
          variant="contained"
          onClick={() => decreaseCount(count)}
          disabled={count > 0 ? false : true}
        >
          -
        </Button>
        <div className={styles.text}> Value {count}</div>
        <Button
          variant="contained"
          onClick={() => increaseCount(count)}
          disabled={count < 10 ? false : true}
        >
          +
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default Counter;
