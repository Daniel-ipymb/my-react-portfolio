import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/components/styles/app.css'

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Route exact path="/react_portfolio" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />  
        <Route exact path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
