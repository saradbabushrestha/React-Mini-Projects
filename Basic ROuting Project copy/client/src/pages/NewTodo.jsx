// ./pages/NewTodo.js
import React from "react";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";

export function NewTodo() {
  const errorMessage = useActionData();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";
  return (
    <div className="container">
      <h1 className="page-title">New Todo</h1>
      <Form className="form" method="post" action="/new">
        <div>{errorMessage}</div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>
        </div>
        <div className="form-btn-row form-row">
          <Link to=".." className="btn btn-outline">
            Back
          </Link>
          <button disabled={isSubmitting} className="btn">
            {isSubmitting ? "loading" : "Create"}
          </button>
        </div>
      </Form>
    </div>
  );
}
