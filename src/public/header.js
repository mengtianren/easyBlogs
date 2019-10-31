import React, { Component } from "react";
import { Menu, Icon, Layout } from "antd";

const { Header } = Layout;

export default class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "Vue"
    };
  }

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          className=""
        >
          <Menu.Item key="All">
            <Icon type="mail" />
            全部
          </Menu.Item>
          <Menu.Item key="Vue">
            <Icon type="mail" />
            关于Vue
          </Menu.Item>
          <Menu.Item key="React">
            <Icon type="mail" />
            关于React
          </Menu.Item>
          <Menu.Item key="Angular">
            <Icon type="mail" />
            关于Angular
          </Menu.Item>
          <Menu.Item key="User">
            <Icon type="user" />
            关于作者
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
