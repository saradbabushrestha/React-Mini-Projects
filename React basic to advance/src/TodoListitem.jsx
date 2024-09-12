import { TodoList } from "./TodoList";

export function TodoListitem(children, isComplete) {
  return;
  <label>
    <input type="checkbox" defaultChecked={isComplete} />
    {children}
  </label>;
}
