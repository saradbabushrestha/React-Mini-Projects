import { Usercard } from "./UserCard";
import "./user.css";
import user from "./user.json";
import { UserCardClass } from "./UserCardClass";
export default function App() {
  return (
    <div>
      <Usercard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
      <br />
      <UserCardClass
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
    </div>
  );
}
