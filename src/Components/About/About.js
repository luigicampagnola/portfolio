import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const About = ({ name, p1, p2 }) => {
  return (
    <div id='about'>
      <div className="cf dt-1 w-100 bt b--black-10 pv4">
        <div className="cf ph3 ph5-ns pv5">
          <header className="fn fl-ns w-50-ns pr4-ns">
            <h1 className="mb3 mt0 lh-title f2 light-gray">About Me</h1>
            <div className="f5 ttu tracked white">{name}</div>
            <div>
              <ScrollAnimation animateIn='fadeIn'>
                <img
                  alt="myPic"
                  className=""
                  src={`./Images/images/image.png`}
                />
              </ScrollAnimation>
            </div>
          </header>
          <div className="fn fl-ns w-50-ns mt7">
            <ScrollAnimation animateIn='fadeInRight'>
            <h2 className="measure pv4-l mt0-ns light-gray 3h-copy">{p1}</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInRight'>
            <h2 className="measure pv4-l mt0-ns light-gray 3h-copy">{p2}</h2>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
