// import { useState, useEffect } from "react";
// let globalVar = 0;
// export function Child() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   // useEffect(() => {
//   //   console.log("Re-Render");
//   // });
//   globalVar = globalVar + 1;
//   console.log(globalVar);
//   useEffect(() => {
//     document.addEventListener("click", () => {
//       console.log("click");
//     });
//     return () => {
//       console.log("Unmount");
//     };
//   }, []);
//   // useEffect(() => {
//   //   console.log(`My name is ${name} and I am ${age} years old`);
//   // }, [name, age]);
//   // useEffect(() => {
//   //   document.title = name;

//   //   const timeout = setTimeout(() => {
//   //     console.log(`My name is ${name}`);
//   //   }, 1000);
//   //   return () => {
//   //     clearTimeout(timeout);
//   //   };
//   // }, [name]);

//   return (
//     <div>
//       <input value={name} on onChange={(e) => setName(e.target.value)} />
//       <br />
//       <br />
//       <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
//       {age}
//       <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
//       <br />
//       <br />
//       My name is {name} and I am {age} years old.
//     </div>
//   );
// }
import { GrandChild } from "./GrandChild";
export function Child() {
  return <GrandChild />;
}
