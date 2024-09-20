export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

// function Greet() {
//   return <h1>Hello Sarad</h1>;
// }
// export default function Greet
