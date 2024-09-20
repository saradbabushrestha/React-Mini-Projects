export const Childrencomponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet parent</button>
    </div>
  );
};
