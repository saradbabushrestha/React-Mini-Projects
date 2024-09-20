import { useState } from "react";
export const Message = () => {
  const [message, setMessage] = useState("Welcome to Shrestha Home");
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Thank you Visiting!!!")}>
        Bye Bye
      </button>
    </div>
  );
};
