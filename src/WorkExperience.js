import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (
      <div class="section">
        <h3>{this.props.workExperience.title}</h3>
        <div class="section-job">
          <div>
            <h4>{this.props.workExperience.job1}</h4>
            <p>{this.props.workExperience.description}</p>
          </div>
          <div>
            <h4>{this.props.workExperience.job1}</h4>

            <p>{this.props.workExperience.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkExperience;
