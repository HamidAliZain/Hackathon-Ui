"use client";

import { useState } from "react";

export const Quantity = () => {
  const [value, setValue] = useState(0);
  function increment() {
    setValue(value + 1);
  }
  function decrement() {
    if (value <= 0) {
      setValue(value);
    } else {
      setValue(value - 1);
    }
  }
  return (
    <>
      <div
        className="center cursor-pointer w-7 h-7 rounded-full bg-white"
        onClick={decrement}
      >
        {" "}
        -{" "}
      </div>
      <span  >{value}</span>
      <div
        className="center cursor-pointer w-7 h-7 rounded-full bg-white"
        onClick={increment}
      >
        {" "}
        +{" "}
      </div>
    </>
  );
};
