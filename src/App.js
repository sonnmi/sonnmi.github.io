import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/section/About";
import Footer from "./components/section/Footer";
import Projects from "./components/section/Projects";
import Contact from "./components/section/Contact";
import Home from "./views/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="/projects" element={ <Projects /> }></Route>
        <Route path="/contact" element={ <Contact /> }></Route>
        <Route path="/footer" element={ <Footer /> }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
