
import React from "react";
import { Link } from "react-router-dom";
import i18next from 'i18next';
import { withNamespaces } from 'react-i18next';
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  UncontrolledCollapse,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
// import { Image } from 'react-bootstrap';
import "scss/HeaderNavbar.scss";

class HeaderNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick(lang) {
    i18next.changeLanguage(lang);
  }
  render() {
    const { t } = this.props;
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-dark headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container className="navContainer">
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
                    <Link to="/" className="nav-link-inner--text link-item">{t('Home')}</Link>
                  </div>

                  {/* mortgage  */}
                  <div className="menu-nav">
                    <UncontrolledDropdown nav>
                      <Link to="/mortgage" className="nav-link-inner--text link-item">{t('Mortgage')}</Link>
                      <DropdownToggle split id="dropdown-split-basic" className="caret-button" />
                      <DropdownMenu>
                        <DropdownItem to="/mortgage/first-time-home-buyer" tag={Link}>
                        {t('First-Time Home Buyer')}
                        </DropdownItem>
                        <DropdownItem to="/mortgage/investment-properties" tag={Link}>
                        {t('Investment Properties')}
                        </DropdownItem>
                        <DropdownItem to="/mortgage/new-to-Canada" tag={Link}>
                        {t('New to Canada')}
                        </DropdownItem>
                        <DropdownItem to="/mortgage/low-income-education-centre" tag={Link}>
                        {t('Low income Education Centre')}
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                    
                    {/* Calculator  */}
                  <div className="menu-nav">
                    <UncontrolledDropdown nav>
                      <Link to="/calculator" className="nav-link-inner--text link-item">{t('Calculator')}</Link>
                      <DropdownToggle split id="dropdown-split-basic" className="caret-button"/>
                      <DropdownMenu>
                        <DropdownItem to="/calculator/mortgage-affordability-calculator" tag={Link}>
                        {t('Mortgage Affordability Calculator')}
                        </DropdownItem>
                        <DropdownItem to="/calculator/mortgage-payment-calculator" tag={Link}>
                        {t('Mortgage Payment Calculator')}
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>

                  {/* About */}
                  <div className="menu-nav">
                    <UncontrolledDropdown nav>
                    <Link to="/about" className="nav-link-inner--text link-item">{t('About')}</Link>
                    <DropdownToggle split id="dropdown-split-basic" className="caret-button"/>
                    <DropdownMenu className="aboutDropdown">
                      <DropdownItem to="/about/our-story" tag={Link}>
                        {t('Our Story')}
                      </DropdownItem>
                      <DropdownItem to="/about/agent" tag={Link}>
                        {t('Agents')}
                      </DropdownItem>
                      <DropdownItem to="/about/referral-program" tag={Link}>
                        {t('Referral Program')}
                      </DropdownItem>
                      <DropdownItem to="/about/mortgage-insight" tag={Link}>
                        {t('Mortgage Insight')}
                      </DropdownItem>
                      <DropdownItem to="/about/mortgage-article" tag={Link}>
                        {t('Mortgage Article')}
                      </DropdownItem>
                      <DropdownItem to="/about/mortgage-news" tag={Link}>
                        {t('Mortgage News')}
                      </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>

                  {/* Contact */}
                  <div className="menu-nav">
                    <Link to="/contact" className="nav-link-inner--text link-item">{t('Contact')}</Link>
                  </div>

                  {/* language */}
                  <div className="menu-nav flag">
                    {/* 中文 */}
                    <img className="zh-flag" onClick={() => this.handleClick('zh')} alt="English" src={require("assets/img/flag/chinese.png")} />
                    {/* English */}
                    <img className="en-flag" onClick={() => this.handleClick('en')} alt="English" src={require("assets/img/flag/english.png")} />
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

export default withNamespaces()(HeaderNavbar);
