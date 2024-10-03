import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div class="cv-header">
          <div>
            <h1>{this.props.headerInfo.name}</h1>
            <h2> {this.props.headerInfo.field}</h2>
          </div>
          <div class="user-info">
            <a href="mailto:tac47@njit.edu">{this.props.headerInfo.email}</a>
            <p>{this.props.headerInfo.web}</p>
            <p>{this.props.headerInfo.mobile}</p>
          </div>
        </div>
        <hr class="cv-header-divider" />
      </div>
    );
  }
}

export default Header;
