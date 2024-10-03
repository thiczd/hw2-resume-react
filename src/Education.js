import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div class="section">
        <div>
          <h3>{this.props.education.main}</h3>
        </div>
        <div>
          <h4>{this.props.education.title1}</h4>
          <p>
            {this.props.education.description1} <br />
            {this.props.education.date1}
            <br />
            {this.props.education.gpa1}
          </p>
          <h4>{this.props.education.title2}</h4>
          <p>
            {this.props.education.description2} <br />
            {this.props.education.date2}
            <br />
            {this.props.education.gpa2}
          </p>
        </div>
      </div>
    );
  }
}
export default Education;
