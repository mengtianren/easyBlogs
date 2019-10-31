import React, { Component } from "react";
import { Card, Row, Col, Pagination } from "antd";
import { Link } from "react-router-dom";
import "../assets/list.less";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textlist: [
        {
          id: 1,
          title: "第一条",
          content: "内容",
          created: "20190101",
          view: 200
        }
      ]
    };
  }

  render() {
    //   console.log(match)
    const { textlist } = this.state;

    return (
      <div className="list">
        {textlist.map((item, index) => (
          <Link key={item.id} to={`/detail/${item.id}`}>
            <Card title={item.title} onClick={this.onDetail}>
              <Row>
                <Col span={8}>创建时间:{item.created}</Col>
                <Col span={8}></Col>
                <Col span={8}>阅读:{item.view}</Col>
              </Row>

              {item.content}
            </Card>
          </Link>
        ))}
        <Pagination defaultCurrent={1} total={50} className="pagination" />,
      </div>
    );
  }
}
