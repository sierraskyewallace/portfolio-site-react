import React from "react";
import { connect } from "react-redux";
import ProjectsContainer from "./containers/projectsContainer";
import './App.css';

class App extends React.Component {

  componentDidMount() {
  }

  render() {

    return (
      
      <div className="App" >
        <ProjectsContainer projects={this.props.projects} />  
      </div>

      
    );
  }
}


export default App;
