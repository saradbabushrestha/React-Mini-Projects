import { useState } from "react";

export const Form = () => {
  const [username, setUsername] = useState("");
  const submitHandler = () => {
    alert(`The Data is ${username}`);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>UserName</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
