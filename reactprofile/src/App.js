import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { Container } from 'reactstrap';
import Projects from './components/pages/index/projects';
import About from './components/pages/portfolio/portfolio';
import Contact from './components/pages/contact/contact';
import Footer from './components/footer/footer';


// import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Container>
            <Route exact path="/" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Container>
          <Footer/>
      </div>
      </Router>
  );
}

export default App;

