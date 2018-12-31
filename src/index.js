import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "/components/Header";
import MemeGenerator from "/components/MemeGenerator";
function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
