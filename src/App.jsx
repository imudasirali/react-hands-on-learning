import { Card } from "./components/Card";
import { CardClass } from "./components/CardClass";
import user from "./data/user.json";
import "./styles.css";

function App() {
  return (
    <div>
      <Card
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      ></Card>
      <br />

      <CardClass
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      ></CardClass>
    </div>
  );
}

export default App;
