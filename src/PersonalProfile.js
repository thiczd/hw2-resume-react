import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <h3>{this.props.personalProfile.title}</h3>
          <div>
            <p>{this.props.personalProfile.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProfile;
