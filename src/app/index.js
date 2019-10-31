import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";
import Home from "./home";

import Headers from "../plugin/header";
import Footers from "../plugin/footer";

const { Content } = Layout;

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  toUrl = (url) =>{
    const { match } = this.props;
      this.props.history.push(`${match.url}/${url}`)
  }
  render() {
    const { match } = this.props;
    return (
      <Layout className="mybody">
        <Headers  toUrl={this.toUrl} />
        <Content>
          <Route path={`${match.url}/:type`} component={Home} />
        </Content>
        <Footers />
      </Layout>
    );
  }
}
