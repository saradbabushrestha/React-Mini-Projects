// import { useState } from "react";
// function App() {
//   const [items, setItems] = useState([
//     { id: crypto.randomUUID(), name: "Item 1" },
//     { id: crypto.randomUUID(), name: "Item 2" },
//   ]);
//   function addItem() {
//     setItems((currentItems) => {
//       return [{ id: crypto.randomUUID(), name: "New Item" }, ...currentItems];
//     });
//   }
//   return (
//     <>
//       <div>
//         <button onClick={addItem}>Add Item</button>
//         <pre>
//           {items.map((items) => {
//             return <div key={items.id}>{items.name}</div>;
//           })}
//         </pre>
//       </div>
//     </>
//   );
// }
// export default App;

// const { useState } = require("react");

// import React from "react";
// import { ClassComponent } from "./ClassComponent";
// import { FunctionComponent } from "./FunctionComponent";

// function App() {
//   return (
//     <div>
//       {/* <ClassComponent />
//       <br />
//       <br /> */}
//       <FunctionComponent favouriteNumber={3} />
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";

// export default function App() {
//   const [users, setUsers] = useState();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState();
//   useEffect(() => {
//     setLoading(true);
//     setError(undefined);
//     const controller = new AbortController();
//     fetch("https://jsonplaceholder.typicode.com/users", {
//       signal: controller.signal,
//     })
//       .then((res) => {
//         if (res.status === 200) {
//           return res.json();
//         } else {
//           return Promise.reject(res);
//         }
//       })
//       // .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//       })
//       .catch((e) => {
//         if (e?.name === "AbortError") return;
//         setError(e);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);
//   let jsx;
//   if (loading) {
//     jsx = <h2>Loading...</h2>;
//   } else if (error !== null) {
//     jsx = <h2>Error</h2>;
//   }
//   jsx = JSON.stringify(users);

//   return (
//     <div>
//       <h1>Users</h1>
//       {jsx}

//       {/* {List of users} */}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { User } from "./User";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     setIsLoading(true);

//     const controller = new AbortController();
//     fetch("https://jsonplaceholder.typicode.com/users", {
//       signal: controller.signal,
//     })
//       .then((res) => res.json())
//       .then(setUsers)
//       .finally(() => {
//         setIsLoading(false);
//       });

//     // return () => {
//     //   controller.abort();
//     // };
//   }, []);

//   return (
//     <>
//       <h1>User List</h1>
//       {isLoading ? (
//         <h2>Loading...</h2>
//       ) : (
//         <ul>
//           {users.map((user) => {
//             /* <User
//                 key={user.id}
//                 name={user.name}
//                 email={user.email}
//                 phone={user.phone}
//                 username={user.username}
//               />  */

//             return <User key={user.id} {...user} />;
//           })}
//         </ul>
//       )}
//     </>
//   );
// }
// export default App;

// import React from "react";

// const CUSTOM_HTML = `
//  <h1>Hi </h1>
//  <div>My name is Sarad Babu Shrestha</div>`;

// function App() {
//   return <div dangerouslySetInnerHTML={{ __html: CUSTOM_HTML }}></div>;
// }
// export default App;

// import { useState, useRef, useEffect } from "react";
// function App() {
//   const [name, setName] = useState("");
//   const inputRef = useRef();
//   useEffect(() => {
//     console.log(inputRef.current.value);
//   }, [name]);

//   return (
//     <>
//       <label>
//         Name:
//         <input
//           ref={inputRef}
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//     </>
//   );
// }
// export default App;

// import React from "react";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//     };
//     this.inputRef = React.createRef();
//   }
//   componentDidMount() {
//     this.inputRef.current.focus();
//   }
//   render() {
//     return (
//       <>
//         <label>
//           Name:
//           <input
//             ref={this.inputRef}
//             value={this.state.name}
//             onChange={(e) => this.setState({ name: e.target.value })}
//           />
//         </label>
//       </>
//     );
//   }
// }
// export default App;

// import { useState, useMemo } from "react";
// const LIST = Array(1_000_000)
//   .fill()
//   .map((_, i) => i + 1);
// function App() {
//   const [query, setQuery] = useState("");
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const filteredList = useMemo(() => {
//     console.log("In Memo");
//     return LIST.filter((n) => n.toString().includes(query));
//     console.log(filteredList.length);
//   }, [query]);

//   // const filteredList = LIST.filter((n) => n.toString().includes(query));
//   console.log(filteredList.length);
//   return (
//     <div
//       style={{
//         background: isDarkMode ? "#333" : "white",
//         color: isDarkMode ? "white" : "#333",
//       }}
//     >
//       <label>
//         Query:
//         <input value={query} onChange={(e) => setQuery(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           onChange={(e) => setIsDarkMode(e.target.checked)}
//           checked={isDarkMode}
//         />
//         Dark Mode
//       </label>
//     </div>
//   );
// }
// export default App;
// import { useState, useEffect, useCallback } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);

//   const printName = useCallback(() => {
//     console.log(`Name: ${name}`);
//   }, [name]);

//   useEffect(() => {
//     console.log("In Effect");
//     printName();
//   }, [printName]);

//   return (
//     <>
//       <label>
//         Name:
//         <input value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <br />
//       Age:
//       <input
//         type="number"
//         value={age}
//         onChange={(e) => setAge(e.target.valueAsNumber)}
//       />
//     </>
//   );
// }
// export default App;
// import { useState } from "react";
// import { useToggle } from "./useToggle";

// function App() {
//   const nameInput = useInputValue("");
//   const [isDarkMode, toggleDarkMode] = useToggle(false);
//   // const [isDarkMode, setIsDarkMode] = useState(false);
//   return (
//     <div
//       style={{
//         background: isDarkMode ? "#333" : "white",
//         color: isDarkMode ? "white" : "#333",
//       }}
//     >
//       <label>
//         Name:
//         <input {...nameInput} />
//       </label>
//       <br />
//       <br />
//       <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
//     </div>
//   );
// }
// function useInputValue(initialValue) {
//   const [value, setValue] = useState(initialValue);

//   return {
//     value,
//     onChange: (e) => setValue(e.target.value),
//   };
// }

// export default App;
// import { useState } from "react";
// import "./styles.css";
// import { TodoItem } from "./TodoItem";
// function App() {
//   const [newTodoName, setNewTodoName] = useState("");
//   const [todos, setTodos] = useState([]);

//   function addNewTodo(e) {
//     e.preventDefault();
//     if (newTodoName === "") return;
//     setTodos((currentTodos) => {
//       return [
//         ...currentTodos,
//         { name: newTodoName, completed: false, id: crypto.randomUUID() },
//       ];
//     });
//     setNewTodoName("");
//   }
//   function toggleTodo(todoId, completed) {
//     setTodos((currentTodos) => {
//       return currentTodos.map((todo) => {
//         if (todo.id === todoId) return { ...todo, completed };
//         return todo;
//       });
//     });
//   }
//   function deleteTodo(todoId) {
//     setTodos((currentTodos) => {
//       return currentTodos.filter((todo) => todo.id !== todoId);
//     });
//   }
//   return (
//     <>
//       <ul id="list">
//         {todos.map((todo) => {
//           return (
//             <TodoItem
//               key={todo.id}
//               {...todo}
//               toggleTodo={toggleTodo}
//               deleteTodo={deleteTodo}
//             />
//           );
//         })}
//       </ul>
//       <form onSubmit={addNewTodo} id="new-todo-form">
//         <label form="todo-input">New Todo</label>
//         <input
//           type="text"
//           id="todo-input"
//           value={newTodoName}
//           onChange={(e) => setNewTodoName(e.target.value)}
//         />
//         <button onClick={addNewTodo}>Add Todo</button>
//       </form>
//     </>
//   );
// }
// export default App;

// import { useEffect, useRef, useState } from "react";
// function App() {
//   // const nameRef = useRef();
//   const [name, setName] = useState("");
//   useEffect(() => {
//     console.log("Render");
//   });
//   function handleSubmit(e) {
//     e.preventDefault();
//     // const name = nameRef.current.value;
//     if (name === "") return;
//     alert(`Name: ${name}`);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label for="name">Name</label>
//       <br />
//       {/* <input id="name" type="text" ref={nameRef} /> */}
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <br />
//       <button>Alert Name</button>
//     </form>
//   );
// }
// export default App;
// import { useEffect, useState, createContext, useContext } from "react";
// import { Child } from "./Child";

// export const ThemeContext = createContext();

// export default function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   function toggleTheme() {
//     setIsDarkMode((prevMode) => !prevMode);
//   }

//   useEffect(() => {
//     document.body.style.background = isDarkMode ? "#333" : "white";
//     document.body.style.color = isDarkMode ? "white" : "#333";
//   }, [isDarkMode]);

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       <Child />
//       <p>
//         Hello, I am under the water
//         huhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuh
//       </p>
//     </ThemeContext.Provider>
//   );
// }

// function Child() {
//   const { isDarkMode, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div>
//       <p>The current theme is {isDarkMode ? "Dark" : "Light"}</p>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// }
// import { useState } from "react";
// import { Counter } from "./counter";
// import { CounterReset } from "./CounterReset";
// export default function App() {
//   const [count, setCount] = useState(0);

//   function changeCount(amount) {
//     setCount((c) => c + amount);
//   }
//   function reset() {
//     setCount(0);
//   }

//   return (
//     <>
//       {" "}
//       <Counter count={count} changeCount={changeCount} />
//       <CounterReset reset={reset} />
//     </>
//   );
// // }
// import { useState, useMemo } from "react";

// export default function App() {
//   const [items, setItems] = useState([
//     { id: 1, name: "Sarad" },
//     { id: 2, name: "Ram" },
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [selectedUserId, setSelectedUserId] = useState();

//   const selectedUser = items.find((item) => item.id === selectedUserId);

//   const filteredItems = useMemo(
//     () => items.filter((item) => item.id < inputValue),
//     [items, inputValue]
//   );

//   function selectUser(id) {
//     setSelectedUserId(id);
//   }

//   return (
//     <>
//       <label htmlFor="lessThan">Show Less Than</label>
//       <input
//         id="lessThan"
//         type="number"
//         onChange={(e) => setInputValue(e.target.valueAsNumber)}
//         value={inputValue}
//       />
//       <br />
//       <br />
//       <div>{filteredItems.map((item) => item.name).join(", ")}</div>
//       <br />
//       <button
//         onClick={() => setItems((i) => [...i, { id: 2.5, name: "New User" }])}
//       >
//         Add 2.5 To List
//       </button>
//     </>
//   );
// }
export default function App() {
  return <div>www.development .com</div>;
}
