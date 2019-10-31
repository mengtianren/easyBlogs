import React, { Component } from "react";
import List from "./list";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        {match.url}
        <List />
      </div>
    );
  }
}
