import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

const FollowLink = () => {
  return (
    <>
      <ul className="follow-links">
        <li className="follow-container">
          <div className="follow-icon-container1 ">
            <a
              href="https://facebook.com/ihimirepeter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="follow-icon FaFacebookF" />
            </a>
          </div>
        </li>
        <li className="follow-container">
          <div className="follow-icon-container2">
            <a
              href="https://twitter.com/ptechanalysis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="follow-icon FaTwitter" />
            </a>
          </div>
        </li>
        <li className="follow-container">
          <div className="follow-icon-container3">
            <a
              href="https://instagram.com/peterihimire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="follow-icon FaInstagram" />
            </a>
          </div>
        </li>
        <li className="follow-container">
          <div className="follow-icon-container4">
            <a
              href="https://www.linkedin.com/in/peter-ihimire-20b007162"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="follow-icon FaLinkedinIn" />
            </a>
          </div>
        </li>
        <li className="follow-container">
          <div className="follow-icon-container5">
            <a
              href="https://github.com/peterihimire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="follow-icon FaGithub" />
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};
export default FollowLink;
