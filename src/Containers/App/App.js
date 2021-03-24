//import logo from './logo.svg';
import "./App.css";
import Header from "../../Components/Header/Header";
import Feature from "../../Components/Feature/Feature";
import { projects } from "../../Components/Projects/Projects";
import About from "../../Components/About/About";
import { Person } from "../../Components/Content/Content";
import { Component } from "react";
import Footer from "../../Components/Footer/Footer";
import ProjectList from "../../Components/Projects/ProjectList";
import ParticlesConfig from "../../Components/Particles/ParticlesConfig";
import ParticleComponent from "../../Components/Particles/ParticlesComponent";


class App extends Component {
  render() {
    return (
      <div>
        <ParticleComponent className="particles" params={{ ParticlesConfig }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Header />
          <Feature id={Person[0].id} name={Person[0].name} />
          <About
            id={Person[0].id}
            name={Person[0].name}
            p1={Person[0].p1}
            p2={Person[0].p2}
          />
          <ProjectList projects={projects} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;