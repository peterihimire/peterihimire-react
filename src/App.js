import React, { Component, Fragment } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import { FaArrowDown } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { Link } from "react-scroll";

// import img1 from "./images/benkih-ecommerce.png";
// import img2 from "./images/benkih-todo.png";
// import img3 from "./images/benkih-budget.png";
// import img4 from "./images/benkih-quiz.png";
// import img5 from "./images/peterihimirefewd.png";

import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Skill from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Navbar
          clicked={this.toggleHandler}
          showNav={this.state.isOpen}
          overlay={this.removeOverlay}
        />
        <Hero hero="defaultHero">
          <Banner name="peter ihimire" title="frontend web developer">
            <Link
              activeClass="active"
              to="project-section"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="btn animated-btn"
            >
              see my work
            </Link>
          </Banner>
          <Link
            activeClass="active"
            to="service-section"
            spy={true}
            smooth={true}
            duration={500}
            offset={-74}
            className="indicator"
          >
            <FaArrowDown />
          </Link>
        </Hero>
        <Services />
        <About />
        <Projects />
        <Skill />
        <Contact />
        <Footer />
        <ScrollToTop scroll={this.scrollUp} showTop={this.state.isVisible} />
      </Fragment>
    );
  }
}

export default App;
