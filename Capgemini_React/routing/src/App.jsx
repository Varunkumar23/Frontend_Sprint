import React from "react";
import { Link, NavLink, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div>
      <Link to="/"> Home | </Link>
      <Link to="/about"> About | </Link>
      <Link to="/contact"> Contact </Link>

      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/about" element=<About /> />
        <Route path="/contact" element=<Contact /> />
        <Route path="*" element=<PageNotFound /> />
      </Routes>
    </div>
  );
};

export default App;
