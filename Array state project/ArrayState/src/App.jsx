import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("");

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }

  function removeSpecificLetter(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(INITIAL_VALUE);
  }
  function updateAtoH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") return "H";
        return element;
      });
    });
  }
  function addLetterAtIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ];
    });
  }

  return (
    <div>
      {array.join(", ")}
      <br />
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>
      <br />
      <button onClick={() => addLetterToStart("B")}>Add To Start</button>
      <br />
      <button onClick={() => addLetterToEnd("Z")}>Add To End</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={updateAtoH}>Update A to H </button>
      <br />
      <br />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <button onClick={() => addLetterToStart(value)}>
        Add vaule to Array
      </button>
      <br />
      <br />
      <button onClick={() => addLetterAtIndex("C", 2)}>Add C at 2</button>
    </div>
  );
}

export default App;
