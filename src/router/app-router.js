import React from "react";
import { Layout } from "antd";
import { Route, BrowserRouter  as Router } from "react-router-dom";
import "../assets/router.less";
import Headers from "../public/header";
import Footers from "../public/footer";
// import Siders from "../public/sider";

import Home from "../app/home";
import Detail from "../app/detail";

const { Content } = Layout;

const AppRouter = () => (
  <Router>
    <Layout className="mybody">
      <Headers />
      <Content>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </Content>
      <Footers />
    </Layout>
  </Router>
);

export default AppRouter;
