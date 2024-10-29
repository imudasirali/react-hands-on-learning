import { Card } from "./components/Card";
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
    </div>
  );
}

export default App;
