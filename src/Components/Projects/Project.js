import React from "react";
import Tilty from "react-tilty";
import "./Project.css";

const Project = (props) => {
  const { name, id, description, } = props;
  return (
    <div>
      <div className="f5 f3-m lh-copy">
        <div className="cf dt-l w-100 bt b--black-10 pv4">
          <div className="dtc-l v-mid mw6 pr3-l">
            <h1 className="pa3 f2 f1-m f-headline-0 light-gray">{name}</h1>
            <Tilty max={6} scale={1} className="Tilt br2 shadow-2">
              <img
                className="w-100 grow"
                src={`./Images/images/project${id}.png`}
                alt=""
              />
            </Tilty>
          </div>
          <div className="dtc-l v-mid f6 f5-m f4-l measure-l">
            <h4 className="measure pv4-l center dark-gray f3 mt7">
              {description}
            </h4>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
