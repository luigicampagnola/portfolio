import React from "react";
import "./Feature.css";
import { Scrollchor } from "@seinopsys-forks/react-scrollchor";
import logo192 from "../Images/logo192.png";

const Feature = () => {
  return (
    <div>
      <div>
        <div
          className="cover bg-left bg-center-1"
          style={{ 
            backgroundImage:
              "url(https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80)",
          }}
        >
          <div className="bg-black-80 pv5 pb6-m pb7-l">
            <nav className="dt w-100 mw8 center">
              <div className="dtc w2 v-mid pa3">
                <Scrollchor
                  to=""
                  href="/"
                  className="dib w3 h3 pa1 ba b--white-90 grow-large border-box"
                >
                  <img src={logo192} className="pointer" alt="Site Name"></img>
                </Scrollchor>
              </div>
              <div className="dtc v-mid tr pa3">
                <Scrollchor
                  to="#about"
                  className="f3 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
                >
                  About
                </Scrollchor>
                <Scrollchor
                  to="#projects"
                  className="f3 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
                >
                  Projects
                </Scrollchor>
                <Scrollchor
                  to="#myLinks"
                  className="f3 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
                >
                  My Links
                </Scrollchor>
              </div>
            </nav>
            <div className="tc-l mt4 mt5-m mt6-l ph3">
              <div className="f2 f1-l fw2 white-90 mb0 lh-title">
                Luigi Campagnola
              </div>
              <div className="fw1 f3 white-80 mt3 mb4">
                Full-Stack Web Developer
              </div>
              <a
                className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"
                href="https://www.linkedin.com/in/luigi-campagnola-0482871a0/"
                target="_blank"
                rel="noreferrer"
              >
                Call to Action
              </a>
              <span className="dib v-mid ph3 white-70 mb3">or</span>
              <a
                className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
                href="LuigiCampagnolaCV.pdf"
                download
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
