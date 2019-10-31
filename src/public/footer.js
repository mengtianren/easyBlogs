import React, { Component } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default class Headers extends Component {
  render() {
    return (
      <Footer>
        <div>
          <a href="https://github.com/mengtianren"  > github</a>
        </div>
      </Footer>
    );
  }
}
