import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "../Images/image.png";
import javascript from "../Images/javascript.png";
import logo512 from "../Images/logo512.png";
import npmlogo from "../Images/npmlogo.png";
import nodejslogo from "../Images/nodejslogo.png";
import postgres from "../Images/postgres.png";
import boostrap from "../Images/boostrap.png";

const About = ({ name }) => {
  return (
    <div className="about" id="about">
      <div className="cf dt-1 w-100 bt b--black-10 pv4">
        <div className="cf ph3 ph5-ns pv5">
          <div className="fn fl-ns w-50-ns pr4-ns">
            <div className="mb3 mt0 lh-title f2 light-gray">About Me</div>
            <div className="f5 ttu tracked white">{name}</div>
            <div>
              <ScrollAnimation animateIn="fadeIn">
                <img alt="myPic" height="550" className="" src={Image} />
              </ScrollAnimation>
            </div>
          </div>
          <div className="tc mt0 lh-title fl-ns w-50-ns f2 skills">
            <div className="title-skills lh-title f2 light-gray">
              My Skills
            </div>
          </div>
          <div className="fn fl-ns w-50-ns logos">
            <div className="scrollers">
              <ScrollAnimation animateIn="fadeIn">
                <img alt='logos' src={javascript} height="150" />
                <img alt='logos' src={npmlogo} height="90" className="mb3 ml4" />
                <img alt='logos' src={boostrap} height="90" className="mb3" />
              </ScrollAnimation>
              <div className="mt4 ml3">
                <ScrollAnimation animateIn="fadeIn">
                  <img alt='logos' src={logo512} height="100" className="mb3" />
                  <img alt='logos' src={nodejslogo} height="100" className="mb3 ml3" />
                  <img alt='logos' src={postgres} height="130" className="mb3 ml2" />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
