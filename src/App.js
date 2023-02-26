import React from "react";
import "./App.css";
import Appbar from "./components/appbar";

function App() {
  return (
    <div className="bg-repeat bg-[url('./assets/images/bg-repeat.jpeg')] h-[100%]">
      <Appbar />
    </div>
  );
}

export default App;
