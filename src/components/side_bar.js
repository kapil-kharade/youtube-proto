import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';

import '../styles/side_bar.css';

class SideBar extends Component {
  render() {
    return <div>
      <Nav vertical>
        <NavItem>
          <NavLink href="#" className="alignLeft">
            <Row>
              <Col sm="1" className="icon"> <i className="fa fa-home fa-lg"></i> </Col>
              <Col> <span className="colorBlack"> Home </span> </Col>
            </Row>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="alignLeft">
            <Row>
              <Col sm="1" className="icon"> <i className="fa fa-fire fa-lg"></i> </Col>
              <Col> <span className="colorBlack"> Trending </span> </Col>
            </Row>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="alignLeft">
            <Row>
              <Col sm="1" className="icon"> <i className="fa fa-th-list fa-lg"></i> </Col>
              <Col> <span className="colorBlack"> Subscriptions </span> </Col>
            </Row>
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
      <p className="alignLeft title">Library</p>
      <Nav vertical>
        <NavItem>
          <NavLink href="#" className="alignLeft">
            <Row>
              <Col sm="1" className="icon"> <i className="fa fa-history fa-lg"></i> </Col>
              <Col> <span className="colorBlack"> History </span> </Col>
            </Row>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="alignLeft">
            <Row>
              <Col sm="1" className="icon"> <i className="fa fa-clock-o fa-lg"></i> </Col>
              <Col> <span className="colorBlack"> Watch later </span> </Col>
            </Row>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="alignLeft">
            <Row>
              <Col sm="1" className="icon"> <i className="fa fa-thumbs-up fa-lg"></i> </Col>
              <Col> <span className="colorBlack"> Liked videos </span> </Col>
            </Row>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  }
}

export default SideBar;