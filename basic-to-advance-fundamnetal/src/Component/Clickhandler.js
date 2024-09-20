export const Clickhandler = () => {
  const clickhandler = (event, count = 1) => {
    console.log("Button Clicked", count, event);
  };
  return (
    <div>
      <button onClick={clickhandler}>CLick</button>
      <button onClick={(event) => clickhandler(event, 5)}>CLick 5</button>
    </div>
  );
};
