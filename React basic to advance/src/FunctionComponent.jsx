import React, { useEffect, useState } from "react";
import { DisplayString } from "./DisplayString";

export function FunctionComponent({ favouriteNumber }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      {favouriteNumber > 5
        ? `My favorite number is large`
        : `My favourite number is small`}
      <DisplayString name={name} age={age} />
    </div>
  );
}
