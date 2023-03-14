import React from "react";

// styles
import "../assets/styles/components/Footer.scss";

import githubicon from "../assets/static/icon/github.svg";
import twittericon from "../assets/static/icon/twitter.svg";
import youtubeicon from "../assets/static/icon/youtube.svg";

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <footer className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a
                    className="footer-link"
                    href="https://github.com/addleonel"
                  >
                    <img
                      className="footer-icon"
                      src={githubicon}
                      alt="github"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="footer-link"
                    href="https://twitter.com/addleonel"
                  >
                    <img
                      className="footer-icon"
                      src={twittericon}
                      alt="twitter"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="footer-link"
                    href="https://www.youtube.com/channel/UCG8LbrI4Ugs0zAIEiGHTTeA"
                  >
                    <img
                      className="footer-icon"
                      src={youtubeicon}
                      alt="youtube"
                    />
                  </a>
                </li>
              </ul>
              <p className="text-center">A.D.Leonel &copy; 2021 - 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
