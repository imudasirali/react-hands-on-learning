import { useRef } from "react";
import "./style.css";
import { useState } from "react";
import { validateEmail, validatePassword } from "./validators";
function App() {
  const refEmail = useRef("");
  const refPassword = useRef("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  function checkEmail() {
    setError(validateEmail(refEmail.current.value));
  }

  function checkPassword() {
    setPasswordError(validatePassword(refPassword.current.value));
  }

  function submitForm(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);
    const emailError = validateEmail(refEmail.current.value);
    const passwordError = validatePassword(refPassword.current.value);
    setError(emailError);
    setPasswordError(passwordError);
    console.log("hi");
    console.log(error);
    console.log(passwordError);
    if (emailError === "" && passwordError === "") {
      alert("Success");
    } else {
      alert("Please correct the input");
    }
  }

  return (
    <form onSubmit={submitForm} className="form">
      <div className={`form-group ${error.length != "" ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          onChange={isAfterFirstSubmit ? checkEmail : undefined}
          className="input"
          type="email"
          id="email"
          ref={refEmail}
        />
        <div className="msg">{error}</div>
      </div>
      <div
        className={`form-group ${passwordError.length != "" ? "error" : ""}`}
      >
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          onChange={isAfterFirstSubmit ? checkPassword : undefined}
          className="input"
          ref={refPassword}
          type="password"
          id="password"
        />
        <div className="msg">{passwordError}</div>
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
