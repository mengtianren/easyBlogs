import React, { Component } from "react";
import { Layout } from "antd";

const { Sider } = Layout;

export default class Siders extends Component {
  render() {
    return (
      <Sider>
        <div>右边</div>
      </Sider>
    );
  }
}
