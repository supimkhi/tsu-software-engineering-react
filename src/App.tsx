import "./App.css";
import About from "./Views/About";
import Home from "./Views/Home";
<<<<<<< HEAD
import Search from "./Views/Search"
=======
import Search from "./Views/Search";
>>>>>>> 1601d08c484514ab3c88359a0f1680276b284d78

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="search" element={<Search/>}></Route>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
