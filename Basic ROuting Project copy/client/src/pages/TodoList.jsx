// ./pages/TodoList.js
import React, { useEffect, useRef } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { getTodos } from "../api/todos";
import { TodoItem } from "../../components/TodoItem";

export function TodoList() {
  const {
    todos,
    searchParams: { query },
  } = useLoaderData();
  const { state } = useNavigation();
  const queryRef = useRef();
  useEffect(() => {
    queryRef.current.value = query;
  }, [query]);
  return (
    <div className="container">
      <h1 className="page-title mb-2">
        Todos
        <div className="title-btns">
          <Link to="/new" className="btn">
            New
          </Link>
        </div>
      </h1>
      <form className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input type="search" name="query" id="query" ref={queryRef} />
          </div>
          <button className="btn">Search</button>
        </div>
      </form>

      {state === "loading" ? (
        "Loading"
      ) : (
        <ul>
          {" "}
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export function loader({ request: { signal } }) {
  return getTodos({ signal });
}
