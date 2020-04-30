import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMapMarkedAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo2 from "../images/peterihimire-logo-alt.svg";

function footer() {
  return (
    <footer className="footer">
      <div className="summary">
        <div className="footer-center">
          <div className="footer-one">
            <div className="footer-logo">
              <Link to="/" className="logo2">
                <img src={logo2} alt="peterihimire logo 2" />
              </Link>
            </div>

            <div className="footer-contact">
              <h4>Contact Me</h4>
              <ul>
                <li>
                  <Link to="">
                    <FaEnvelope /> peterihimire@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaMapMarkerAlt /> No. 6 Oyediran, Okeira, Ikeja.
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaMapMarkedAlt /> Lagos, Nigeria.
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-follow">
              <h4>Follow Me</h4>
              <ul className="follow-links-footer">
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer1">
                    <Link
                      to="https://facebook.com/ihimirepeter"
                      target="_blank"
                    >
                      <FaFacebookF className="follow-icon-footer FaFacebookF" />
                    </Link>
                  </div>
                </li>
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer2">
                    <Link
                      to="https://twitter.com/ptechanalysis"
                      target="_blank"
                    >
                      <FaTwitter className="follow-icon-footer FaTwitter" />
                    </Link>
                  </div>
                </li>
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer3">
                    <Link
                      to="https://instagram.com/peterihimire"
                      target="_blank"
                    >
                      <FaInstagram className="follow-icon-footer FaInstagram" />
                    </Link>
                  </div>
                </li>
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer4">
                    <Link
                      to="https://www.linkedin.com/in/peter-ihimire-20b007162"
                      target="_blank"
                    >
                      <FaLinkedinIn className="follow-icon-footer FaLinkedinIn" />
                    </Link>
                  </div>
                </li>
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer5">
                    <Link to="https://github.com/peterihimire" target="_blank">
                      <FaGithub className="follow-icon-footer FaGithub" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-two">
        <div className="contact-center">
          <div className="last-footer">
            <p>copyright &copy; 2020 peter ihimire. all rights reserved. </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
