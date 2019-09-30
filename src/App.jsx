import React, { Component } from "react";
import "./App.css";
import Panel from "./Panel.jsx";
import Header from "./Header.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div id="main" class="content">
          <Header />

          <div id="main-body">
            <img id="logo1" src="images/react-logo.svg"></img>
            <img id="logo2" src="images/react-logo.svg"></img>
            <img id="logo3" src="images/react-logo.svg"></img>
            <img id="logo4" src="images/react-logo.svg"></img>
            <img id="logo5" src="images/react-logo.svg"></img>
            <img id="logo6" src="images/react-logo.svg"></img>
            <h1>Say hello to ReactJS</h1>
            <h4>You will learn a Frontend framework from scratch, to become a Ninja Developer</h4>
            <button class="body-margin">Awesome!</button>
          </div>

        </div>

        <div class="content flex flex-sb body-margin">
          <Panel icon="images/icon1.png" description="React makes it painless to create interactive UIs." title="Declarative" />
          <Panel icon="images/icon2.png" description="Build encapsulated components that manage their state." title="Components" />
          <Panel icon="images/icon3.png" description="A set of immutable values are passed to the components." title="Single-Way" />
          <Panel icon="images/icon4.png" description="Statically-typed, designed to run on modern browsers." title="JSX" />
        </div>

      </div>
    );
  }
}

export default App;