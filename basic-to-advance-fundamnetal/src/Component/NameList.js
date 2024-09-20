export const NameList = () => {
  const names = ["Sarad", "Babu", "Shrestha"];
  return (
    <div>
      {names.map((name) => {
        return <h1 key={name}>{name}</h1>;
      })}
    </div>
  );
};
