import React, { Component } from "react";

class Header extends Component {
  render() {
    return <div>{this.props.headerInfo.name}</div>;
  }
}

export default Header;
