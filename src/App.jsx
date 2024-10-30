import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import "./style.css";

function App() {
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "");

  const [lastName, setLastName] = useLocalStorage("LAST_NAME", "");

  const [hobbies, setHobbies] = useLocalStorage("HOBBIES", [
    "Trekking",
    "Cycling",
    "Playing Cricket",
  ]);

  const [hobby, setHobby] = useState("");

  const handleAddHobby = () => {
    setHobbies((currentHobbies) => [...currentHobbies, hobby]);
    setHobby("");
  };

  return (
    <>
      <div className="form-container">
        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <h3>My hobbies</h3>
        <ul className="hobby-list">
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <div className="hobby-input">
          <input
            type="text"
            name="new-hobby"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
          <button onClick={handleAddHobby}>Add Hobby</button>
        </div>
      </div>
    </>
  );
}

export default App;
