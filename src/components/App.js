import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import user from "../data/user";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
