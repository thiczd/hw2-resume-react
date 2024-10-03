import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div>
        <div class="section">
          <h3>Key Skills</h3>

          <div>
            <p>
              {this.props.skill.skill}

              <br />
              {this.props.skill.skill}

              <br />
              {this.props.skill.skill}

              <br />
              {this.props.skill.skill}

              <br />
            </p>
          </div>
          <div>
            <p>
              {this.props.skill.skill}

              <br />
              {this.props.skill.skill}

              <br />
              {this.props.skill.skill}

              <br />
              {this.props.skill.skill}

              <br />
            </p>
          </div>

          <div>
            <p>
              {this.props.skill.skill}

              <br />
              {this.props.skill.skill}

              <br />
              {this.props.skill.skill}

              <br />
              {this.props.skill.skill}

              <br />
            </p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Skills;
