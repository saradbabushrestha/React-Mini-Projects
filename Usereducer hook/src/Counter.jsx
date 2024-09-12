import { act, useReducer } from "react";
const ACTIONS = {
  DECREMENT: "DECREMENT",
  INCREMENT: "INCREMENT",
  RESET: "RESET",
  CHANGE_COUNT: "CHANGE_COUNT",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return state - 1;
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.RESET:
      return 0;
    case ACTIONS.CHANGE_COUNT:
      return state + action.payload.value;
    default:
      return state;
  }
}
export function Counter({ initialCount = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialCount);

  return (
    <>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>RESET</button>
      <br />
      <br />
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.CHANGE_COUNT, payload: { value: 5 } })
        }
      >
        +5
      </button>
    </>
  );
}
