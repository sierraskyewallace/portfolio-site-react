import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/fetchProjects";
import { Route, Routes } from "react-router-dom";

class ProjectsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div>
        <h1>Projects</h1>
        <Routes />
      </div>
    );
  }
}