import { useState } from "react";

import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <div className="overall-body">
        <Home />
        <Products />
        <About />
      </div>
    </>
  );
}

export default App;
