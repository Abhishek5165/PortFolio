import React from "react";
import Intro from "./components/intro";
import "./app.scss";
import Skills from "./components/skills";
import Portfolio from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer";
import About from "./components/about";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Intro />
      <About/>
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
