import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="https://facebook.com/ihimirepeter" target="_blank">
              <FaFacebookF className="follow-icon FaFacebookF" />
            </Link>
          </div>
        </li>
        <li className="follow-container">
          <div className="follow-icon-container2">
            <Link to="https://twitter.com/ptechanalysis" target="_blank">
              <FaTwitter className="follow-icon FaTwitter" />
            </Link>
          </div>
        </li>
        <li className="follow-container">
          <div className="follow-icon-container3">
            <Link to="https://instagram.com/peterihimire" target="_blank">
              <FaInstagram className="follow-icon FaInstagram" />
            </Link>
          </div>
        </li>
        <li className="follow-container">
          <div className="follow-icon-container4">
            <Link
              to="https://www.linkedin.com/in/peter-ihimire-20b007162"
              target="_blank"
            >
              <FaLinkedinIn className="follow-icon FaLinkedinIn" />
            </Link>
          </div>
        </li>
        <li className="follow-container">
          <div className="follow-icon-container5">
            <Link to="https://github.com/peterihimire" target="_blank">
              <FaGithub className="follow-icon FaGithub" />
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
};
export default FollowLink;
