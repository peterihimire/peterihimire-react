import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaCog,
  FaEnvelope,
  FaBlog,
  FaAlignRight
} from "react-icons/fa";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import FollowLink from "../components/FollowLink";
import logo from "../images/peterihimire-logo.svg";
import { useContext } from "react";
import { ProjectContext } from "../context";

const Navbar = () => {
  const context = useContext(ProjectContext);
  const { removeOverlay, toggleHandler, isOpen } = context;
  return (
    <>
      <div
        onClick={removeOverlay}
        className={isOpen ? "navbar-overlay transparent-bg " : "navbar-overlay"}
      />
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link
              activeClass="active"
              to="home-section"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="logo"
            >
              <img src={logo} alt="PeterIhimire logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              // onClick={this.toggleHandler}
              onClick={toggleHandler}
            >
              <span className="menu">Menu</span>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>

          {/* <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}> */}
          <ul className={isOpen ? "nav-links show-nav " : "nav-links"}>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <FaHome className="link-icon home-color" /> home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <FaInfoCircle className="link-icon info-color" /> about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="project-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <FaBriefcase className="link-icon brief-color" /> projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="skill-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-68}
              >
                <FaCog className="link-icon cog-color" /> skills
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaBlog className="link-icon blog-color" /> blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-68}
              >
                <FaEnvelope className="link-icon env-color" /> contact
              </Link>
            </li>
          </ul>
          <FollowLink />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
