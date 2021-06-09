import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "../Images/image.png";
import javascript from "../Images/javascript.png";
import logo512 from "../Images/logo512.png";
import npmlogo from "../Images/npmlogo.png";
import nodejslogo from "../Images/nodejslogo.png";
import postmanlog from "../Images/postmanlog.png";
import postgres from "../Images/postgres.png";
import boostrap from "../Images/boostrap.png";

const About = ({ name }) => {
  return (
    <div className="about" id="about">
      <div className="cf dt-1 w-100 bt b--black-10 pv4">
        <div className="cf ph3 ph5-ns pv5">
          <header className="fn fl-ns w-50-ns pr4-ns">
            <h1 className="mb3 mt0 lh-title f2 light-gray">About Me</h1>
            <div className="f5 ttu tracked white">{name}</div>
            <div>
              <ScrollAnimation animateIn="fadeIn">
                <img alt="myPic" height="550" className="" src={Image} />
              </ScrollAnimation>
            </div>
          </header>
          <div className="fn fl-ns w-50-ns mt6">
            <ScrollAnimation animateIn="fadeIn">
              <img src={javascript} height="150" />
              <img src={npmlogo} height="90" className="mb3 ml4" />
              <img src={boostrap} height="90" className="mb3 ml2" />

            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <img src={logo512} height="100" className="mb3" />
              <img src={nodejslogo} height="100" className="mb3 ml3" />
              <img src={postmanlog} height="100" className="mb3 ml4" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <img src={postgres} height="130" className="mb3 ml2" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
