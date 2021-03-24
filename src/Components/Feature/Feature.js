import React from "react";
import "./Feature.css";

const Feature = (props) => {
  return (
    <div>
      <div
        className="vh-100 dt w-100 tc bg-dark-gray white cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1546027658-7aa750153465?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&au=format&fit=crop&w=1050&q=80)",
        }}
      >
        <div className="dtc v-mid">
          <header className="white-70">
            <h2 className="f6 fw1 ttu tracked mb2 1h-title">{props.name}</h2>
            <h3 className="f6 fw1 1h-title">Portfolio</h3>
          </header>
          <h1 className="f1 f-headline-l fw1 i white-60 loading">Coding</h1>
        </div>
      </div>
    </div>
  );
};

export default Feature;
