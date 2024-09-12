import { useState } from "react";
import "./style.css";
import { TodoItem } from "./TodoItem";

function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  // Adds a new todo item
  function addNewTodo() {
    if (newTodoName.trim() === "") return; // Avoid adding empty todos

    setTodos((currentTodos) => [
      ...currentTodos,
      { name: newTodoName, completed: false, id: crypto.randomUUID() },
    ]);
    setNewTodoName("");
  }

  // Toggles the completed state of a todo item
  function toggleTodo(todoId, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed } : todo
      )
    );
  }

  // Deletes a todo item
  function deleteTodo(todoId) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== todoId)
    );
  }

  return (
    <>
      <ul id="list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
