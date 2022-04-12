import React, { useState } from "react";
import "../components/Main.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCopy } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./Passwords";

const Main = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLenght] = useState(20);
  const [check, setChecked] = useState(false);
  const [includeLower, setIncludeLower] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecials, setIncludeSpecials] = useState(false);

  const checked = (e) => {
    let character = "";

    if (!check && !includeLower && !includeNumbers && !includeSpecials) {
      toast("You need to select at least 1 option");
    }
    if (check) {
      character = character + upperCaseLetters;
    }
    if (includeLower) {
      character = character + lowerCaseLetters;
    }
    if (includeNumbers) {
      character = character + numbers;
    }
    if (includeSpecials) {
      character = character + specialCharacters;
    }

    setPassword(createPassword(character));
  };
  const createPassword = (character) => {
    let password = "";
    let characterLength = character.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterLength);
      password = password + character.charAt(characterIndex);
    }
    console.log(password);
    return password;
  };

  const copyPassword = () => {
    const passwordCopy = document.createElement("textarea");
    passwordCopy.innerText = password;
    document.body.appendChild(passwordCopy);
    passwordCopy.select();
    document.execCommand("copy");
    passwordCopy.remove();
    toast("Password copied to your clipboard!");
  };

  return (
    <div className="Main">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="content">
        <h1>Password Generator </h1>
        
        <div className="password-box">
         <p className="title">Generated password</p>
         <article>
          <h2>{password}</h2>
            <button onClick={copyPassword}>
              <FaCopy />
            </button>
         </article>
          
        </div>

        <form action="">
        <p className="title">Password lenght: {passwordLength}</p>
        <div className="form-group slider">
            <label htmlFor="">0</label>
            <input
              type="range"
              id="password-lenght"
              name="volume"
              min="0"
              max="30"
              step="1"
              defaultValue={setPasswordLenght}
              onChange={(e) => setPasswordLenght(e.target.value)}
            ></input>
            <label htmlFor="">30</label>
          </div>
          <p className="title">Settings</p>
         

          <div className="form-group">
            <label htmlFor="">Include uppercase letters</label>
            <input
              type="checkbox"
              name=""
              id=""
              value="upper-letters"
              checked={check}
              onChange={(e) => setChecked(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Include lowercase letters</label>
            <input
              type="checkbox"
              name=""
              id=""
              value="lower-letters"
              checked={includeLower}
              onChange={(e) => setIncludeLower(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Include Numbers</label>
            <input
              type="checkbox"
              name=""
              id=""
              value="numbers"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Include Symbols</label>
            <input
              type="checkbox"
              name=""
              id=""
              value="symbols"
              checked={includeSpecials}
              onChange={(e) => setIncludeSpecials(e.target.checked)}
            />
          </div>
        </form>
        <button className="btn-submit" onClick={checked}>
              Generate password
            </button>
      </div>
    </div>
  );
};

export default Main;
