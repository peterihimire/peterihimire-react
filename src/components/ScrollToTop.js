import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import { ProjectContext } from "../context";

class ScrollToTop extends Component {
  static contextType = ProjectContext;
  render() {
    console.log(ProjectContext);
    const { scrollUp, isVisible } = this.context;
    return (
      <>
        <Link
          to="/"
          className={isVisible ? "scroll-top top-btn" : "scroll-top"}
          onClick={scrollUp}
        >
          <FaChevronUp />
        </Link>
      </>
    );
  }
}
export default ScrollToTop;

