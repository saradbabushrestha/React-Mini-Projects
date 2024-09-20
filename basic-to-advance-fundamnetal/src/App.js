import "./App.css";
import { Clickhandler } from "./Component/Clickhandler";
import { Greet } from "./Component/Greet";
import { Inline } from "./Component/Inline";
import { Message } from "./Component/Message";
import { NameList } from "./Component/NameList";
import { ParentComponent } from "./Component/parentComponent";
import { StyleSheet } from "./Component/StyleSheet";
import { UserGreeting } from "./Component/userGreeting";
import "./Component/appStyles.css";
import styles from "./Component/appStyles.module.css";
import { Form } from "./Component/Form";
import { PostList } from "./Component/PostList";
import { PostForm } from "./Component/Post Form";
import NAMES from "./Component/data.json";
import { useState, useTransition } from "react";
function App() {
  const [query, setQuery] = useState("");
  const [isPending, startTransation] = useTransition();
  const [inputValur, setinputValue] = useState("");
  const changeHandler = (event) => {
    setinputValue(event.target.value);
    startTransation(() => setQuery(event.target.value));
  };
  const filteredName = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });
  return (
    <div className="App">
      <Greet name="Sarad" heroName=" Ironman" />
      <Greet name="Babu" heroName="Flying Jatt" />
      <button>Action</button>
      <Greet name="Shrestha" heroName="SUii" />
      <p>This is a children props</p>
      <Message />
      <Clickhandler />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <StyleSheet />
      <Inline />
      <h1 className="error">Error</h1>
      <h1 className={styles.sucess}>Sucess</h1>
      <Form />
      <PostList />
      <PostForm />
      <input type="text" value={query} onChange={changeHandler} />
      {isPending && <p>Updating List.....</p>}
      {filteredName.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  );
}

export default App;
