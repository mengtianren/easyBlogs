import React, { Component } from "react";
import { Menu, Icon, Layout } from "antd";

const { Header } = Layout;

export default class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "all"
    };
  }
  componentDidMount() {}

  handleClick = e => {
    this.setState(
      {
        current: e.key
      },
      () => {
        this.props.toUrl(e.key);
      }
    );
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          className="menu"
        >
          <Menu.Item key="all">
            <Icon type="mail" />
            全部
          </Menu.Item>
          <Menu.Item key="vue">
            <Icon type="mail" />
            关于Vue
          </Menu.Item>
          <Menu.Item key="react">
            <Icon type="mail" />
            关于React
          </Menu.Item>
          <Menu.Item key="angular">
            <Icon type="mail" />
            关于Angular
          </Menu.Item>
          <Menu.Item key="user">
            <Icon type="user" />
            关于作者
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
