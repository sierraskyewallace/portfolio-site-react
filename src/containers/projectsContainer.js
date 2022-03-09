import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/fetchProjects";
import { Route, Routes } from "react-router-dom";
import Projects from "../components/Projects";

class ProjectsContainer extends React.Component {

state = {
}


  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div>
        <h1>Projects</h1>
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

