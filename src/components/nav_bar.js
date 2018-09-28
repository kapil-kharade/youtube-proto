import React, { Component } from 'react';
import Searchbar from './search_bar';
import {
  Button,
  Navbar,
  NavbarBrand,
  Row,
  Col
} from 'reactstrap';
import '../styles/nav_bar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return <div>
      <Navbar color="light" light expand="md">
        <div className="row" style={{ width: '100%' }}>
          <div className="col-md-1">
            <Button aria-label="Bars" className="btn-light">
              <i className="fa fa-bars fa-lg"></i>
            </Button>
          </div>
          <div className="col-md-1">
            <NavbarBrand href="/">Youtube</NavbarBrand>
          </div>
          <div className="col-md-6 searchBarContainer">
            <Searchbar onSearchTermChange={term => this.props.onSearchTermChange(term)} />
          </div>
          <div className="col"></div>
          <div className="col-md-3">
            <Row>
              <Col sm="2">
                <Button aria-label="Create" title="Create" className="btn-light">
                  <i className="fa fa-plus-square fa-lg"></i>
                </Button>
              </Col>
              <Col sm="2">
                <Button aria-label="Apps" className="btn-light">
                  <i className="fa fa-th fa-lg"></i>
                </Button>
              </Col>
              <Col sm="2">
                <Button aria-label="Messages" className="btn-light">
                  <i className="fa fa-share fa-lg"></i>
                </Button>
              </Col>
              <Col sm="2">
                <Button aria-label="Notifications" className="btn-light">
                  <i className="fa fa-bell fa-lg"></i>
                </Button>
              </Col>
              <Col>
                <button type="button"
                  className="btn btn-default btn-circle">
                  K
                </button>
              </Col>
            </Row>
          </div>
        </div>
      </Navbar>
    </div>;
  }
}

export default NavBar;