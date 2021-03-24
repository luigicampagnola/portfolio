import React from "react";

const About = ({name, p1, p2}) => {
  return (
    <div>
      <div className="cf dt-1 w-100 bt b--black-10 pv4">
        <div className="cf ph3 ph5-ns pv5">
          <header className="fn fl-ns w-50-ns pr4-ns">
            <h1 className="mb3 mt0 lh-title f2 light-gray">About Me</h1>
            <div className="f5 ttu tracked white">{name}</div>
            <div>
              <img alt='myPic' className='' src={`./Images/images/image.png`}/>
            </div>
          </header>
          <div className="fn fl-ns w-50-ns mt5">
            <h2 className="measure pv4-l mt0-ns dark-gray f3">{p1}</h2>
            <h2 className="1h-copy measure dark-gray">{p2}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
