import React from "react";
import "./App.css";
import logo02 from "./image/logo02.png";
import image from "./image/image.jpg";
import SendForm from "./SendForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <SendForm />
        </div>
        <div className="right">
          <span>@The Reqima Academy</span>
          <img src={image} alt="Guide Post" />
          <div className="logoFooter">
            <img className="logo02" src={logo02} alt="@The Reqima Academy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
