import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/fetchProjects";
import { Route, Routes } from "react-router-dom";
import Projects from "../components/Projects";
import NavBar from "../components/NavBar";

class ProjectsContainer extends React.Component {

state = {
}


  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      
        <div className="container" >  
        <NavBar />
        <Routes>
            <Route path="/" element={<Projects projects={this.props.projects} />} />
        </Routes>
        </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectsContainer);

