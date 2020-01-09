/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
// import Headroom from "headroom.js";
// reactstrap components
import {
  // Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  // Media,
  NavbarBrand,
  Navbar,
  // NavItem,
  // NavLink,
  Nav,
  Container,
  Row,
  Col,
  // UncontrolledTooltip
} from "reactstrap";

import "scss/HeaderNavbar.scss";

class HeaderNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen:false,
      isOpenMortgage: false,
      isOpenCalculator: false,
      isOpenAbout: false,
    }
  }

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-dark headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="Logo Imgae"
                  // src={require("assets/img/brand/argon-react-white.png")}
                />
              </NavbarBrand>
              {/* logo icon */}
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="Logo + Monest"
                          // src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>

                
                <Nav className=" menu navbar-nav-hover align-items-lg-center" navbar>
                  <div className="menu-nav">
                    <Link to="/" className="menu-item nav-link-inner--text">Home</Link>
                  </div>

                {/* mortgage  */}
                <div className="menu-nav">
                <Link to="/mortgage" className=" menu-item nav-link-inner--text">Mortgage</Link>
                <UncontrolledDropdown nav className="mobile-dropdown">
                    <DropdownToggle nav>
                      <span className="btn-icon btn btn-primary" onClick={()=>this.setState({ isOpenMortgage: !this.state.isOpenMortgage, isOpen:this.state.isOpen  })}>
                        { 
                          this.state.isOpenMortgage ? <i className="fa fa-minus" /> : <i className="fa fa-plus" />
                          // this.state.isOpen ? <i className="fa fa-minus" /> : <i className="fa fa-plus" />
                        }
                      </span>
                    </DropdownToggle>
                    <DropdownMenu className="mobile-dropdown-menu">
                      <DropdownItem to="/mortgage/first-time-home-buyer" tag={Link}>
                      First-Time Home Buyer
                      </DropdownItem>
                      <DropdownItem to="/mortgage/investment-properties" tag={Link}>
                      Investment Properties
                      </DropdownItem>
                      <DropdownItem to="/mortgage/new-to-Canada" tag={Link}>
                      New to Canada
                      </DropdownItem>
                      <DropdownItem to="/mortgage/low-income-education-centre" tag={Link}>
                      Low income Education Centre
                      </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                  </div>

                  {/* Calculator  */}
                  <div className="menu-nav">
                  <Link to="/calculator" className="menu-item nav-link-inner--text">Calculator</Link>
                  <UncontrolledDropdown nav className="mobile-dropdown">
                    <DropdownToggle nav>
                      <span className="btn-icon btn btn-primary" onClick={()=>this.setState({ isOpenCalculator: !this.state.isOpenCalculator })}>
                        { 
                          this.state.isOpenCalculator ? <i className="fa fa-minus" /> : <i className="fa fa-plus" />
                        }
                      </span>
                    </DropdownToggle>
                    <DropdownMenu className="mobile-dropdown-menu">
                      <DropdownItem to="/calculator/mortgage-affordability-calculator" tag={Link}>
                      Mortgage Affordability Calculator
                      </DropdownItem>
                      <DropdownItem to="/calculator/mortgage-payment-calculator" tag={Link}>
                      Mortgage Payment Calculator
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  </div>

                  {/* About */}
                  <div className="menu-nav">
                  <Link to="/about" className="menu-item nav-link-inner--text">About</Link>
                  <UncontrolledDropdown nav className="mobile-dropdown">             
                    <DropdownToggle nav>
                    <span className="btn-icon btn btn-primary" 
                      onClick={
                        ()=>this.setState({ isOpenAbout: !this.state.isOpenAbout })
                      }>

                        { 
                          this.state.isOpenAbout 
                          ? <i className="fa fa-minus" /> 
                          : <i className="fa fa-plus" />
                        }

                      </span>
                    </DropdownToggle>
                    <DropdownMenu className="mobile-dropdown-menu">
                      <DropdownItem to="/mortgage/first-time-home-buyer" tag={Link}>
                      Our Story
                      </DropdownItem>
                      <DropdownItem to="/mortgage/investment-properties" tag={Link}>
                      Agents
                      </DropdownItem>
                      <DropdownItem to="/mortgage/new-to-Canada" tag={Link}>
                      Referral Program
                      </DropdownItem>
                      <DropdownItem to="/mortgage/low-income-education-centre" tag={Link}>
                      Mortgage Insight
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  </div>

                  {/* Contact */}
                  <div className="menu-nav">
                    <Link to="/contact" className="menu-item nav-link-inner--text">Contact</Link>
                  </div>

                  {/* 中文 */}
                  <div className="menu-nav">
                  <i className="fa fa-minus" />
                  </div>

                  {/* English */}
                  <div className="menu-nav">
                  <i className="fa fa-minus" />
                  </div>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
        </>
      
    );
  }
}

export default HeaderNavbar;
