import "./App.css";
import Search from "./Views/Search";
import About from "./Views/About";
import Home from "./Views/Home";
import Profile from "./Views/Profile";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Profileinfo from "./Views/ProfileInfo";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="profile" element={<Profile/>}></Route>
            <Route path="search" element={<Search/>}></Route>
            <Route path="Profileinfo" element={<Profileinfo/>}></Route>

          </Route>
        </Routes>
    </Router>
  );
}

export default App;
