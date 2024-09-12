import { useState } from "react";
export function Counter({ count, changeCount }) {
  return (
    <>
      <button onClick={() => changeCount(-1)}>-</button>
      {count}
      <button onClick={() => changeCount(+1)}>+</button>
      <br />
      <br />
    </>
  );
}
