import { Childrencomponent } from "./Childrencomponent";
export const ParentComponent = () => {
  const greetparent = (childName) => {
    alert(`Hello parents ${childName}`);
  };
  return <Childrencomponent greetHandler={greetparent} />;
};
