import React from "react";
import Tilty from "react-tilty";
import "./Project.css";
import ScrollAnimation from "react-animate-on-scroll";

const Project = (props) => {
  const { name, id, description } = props;
  return (
    <div id='projects'>
      <div className="f5 f3-m lh-copy">
        <div className="cf dt-l w-100 ">
          <div className="dtc-l v-mid mw6 pr3-l">
            <div className="title-font f1-m ">{name}</div>
            <div className='under-lining mb4 ml1'></div>
            <ScrollAnimation animateIn="fadeIn">
              <Tilty max={6} scale={1} className="Tilt br2 shadow-2">
                <img
                  className="w-100 grow"
                  src={`./Images/images/project${id}.png`}
                  alt=""
                />
              </Tilty>
            </ScrollAnimation>
          </div>
          <div className="dtc-l v-mid f6 f5-m f4-l measure-l">
            <div className="measure pv4-l center f3 mt7">{description}</div>
            <div className="flex ml5">
              <div className="button-ps mt6">
                <a
                  target="_blank"
                  className=" f8 link dim br2 ph3 pv2 mb2 dib white bg-dark-gray"
                  href={`https://github.com/luigicampagnola/project-${id}`}
                  rel="noreferrer"
                >
                  View Source Code
                </a>
              </div>
              <div className="button-ps mt6">
                <a
                  target="_blank"
                  className=" f8 link dim br2 ph3 pv2 mb2 dib white live-btn "
                  href={`https://github.com/luigicampagnola/project-${id}`}
                  rel="noreferrer"
                >
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
