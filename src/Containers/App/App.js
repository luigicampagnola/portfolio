
import "./App.css";
import Feature from "../../Components/Feature/Feature";
import { projects } from "../../Components/Projects/Projects";
import About from "../../Components/About/About";
import { Person } from "../../Components/Content/Content";
import { Component } from "react";
import Footer from "../../Components/Footer/Footer";
import ProjectList from "../../Components/Projects/ProjectList";
import "animate.css";
import "react-animate-on-scroll";



class App extends Component {
  render() {
    return (
      <div>
        <Feature id={Person[0].id} name={Person[0].name}/>
        <About
          id={Person[0].id}
          name={Person[0].name}
          p1={Person[0].p1}
          p2={Person[0].p2}
        />
        <ProjectList projects={projects} />
        <Footer />
      </div>
    );
  }
}

export default App;
