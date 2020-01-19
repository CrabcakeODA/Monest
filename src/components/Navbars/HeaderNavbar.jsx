import React from "react";
import { Link } from "react-router-dom";
import i18next from 'i18next';
import { withNamespaces } from 'react-i18next';
import {
  Nav,
  Container,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown,
  Button
} from 'reactstrap';
import "scss/HeaderNavbar.scss";
import { Navbar,Dropdown } from 'react-bootstrap';

class HeaderNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen1: false,
      dropdownOpen2: false,
      dropdownOpen3: false,
      isSet: true

    };
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
  }
  

  toggle1() {
    this.setState({
      dropdownOpen1: !this.state.dropdownOpen1,
    });
  }
  toggle2() {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2,
    });
  }
  toggle3() {
    this.setState({
      dropdownOpen3: !this.state.dropdownOpen3,
    });
  }
  
  handleClick(lang) {
    i18next.changeLanguage(lang);
  }
  render() {
    const { t } = this.props;
    return (
      <>
        <header className="header-global">
          <Navbar collapseOnSelect
            className="navbar-main navbar-transparent navbar-dark headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container className="navContainer">
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img className="logo"
                  alt="Logo Imgae"
                  src={require("assets/img/logo2.png")}
                />
              </NavbarBrand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbar_global" />
              <Navbar.Collapse data-toggler="#navbar_global" id="responsive-navbar-nav">
                <Nav className=" menu navbar-nav-hover align-items-lg-center" navbar>
                  <div className="menu-nav">
                    <Link to="/" className="nav-link-inner--text link-item">{t('Home')}</Link>
                  </div>

                  {/* mortgage  */}
                  <div>
                    <ButtonDropdown className="dropdown menu-nav" nav isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
                      <Button id="caret" className="link-item" href="/mortgage">{t('Mortgage')}</Button>
                      <DropdownToggle caret className="caret-button" />
                      <DropdownMenu>
                        <Dropdown.Item href="/mortgage/first-time-home-buyer">
                          {t('First-Time Home Buyer')}
                        </Dropdown.Item>
                        <Dropdown.Item href="/mortgage/investment-properties">
                          {t('Investment Properties')}
                        </Dropdown.Item>
                        <Dropdown.Item href="/mortgage/new-to-Canada">
                          {t('New to Canada')}
                        </Dropdown.Item>
                        <Dropdown.Item href="/mortgage/low-income-education-centre">
                          {t('Low income Education Centre')}
                        </Dropdown.Item>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                    
                    {/* Calculator  */}
                   <div>
                      <ButtonDropdown className="dropdown menu-nav" nav isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                        <Button id="caret" className="link-item" href="/calculator">{t('Calculator')}</Button>
                        <DropdownToggle caret className="caret-button" />
                        <DropdownMenu>
                          <Dropdown.Item href="/calculator/mortgage-affordability-calculator">
                          {t('Mortgage Affordability Calculator')}
                          </Dropdown.Item>
                          <Dropdown.Item href="/calculator/mortgage-payment-calculator">
                          {t('Mortgage Payment Calculator')}
                          </Dropdown.Item>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div> 

                  {/* About */}
                  <div>
                    <ButtonDropdown className="dropdown menu-nav" nav isOpen={this.state.dropdownOpen3} toggle={this.toggle3}>
                      <Button id="caret" className="link-item" href="/about">{t('About')}</Button>
                      <DropdownToggle caret className="caret-button"/>
                      <DropdownMenu className="aboutDropdown">
                        <Dropdown.Item href="/about/our-story">
                          {t('Our Story')}
                        </Dropdown.Item>
                        <Dropdown.Item href="/about/agent">
                          {t('Agents')}
                        </Dropdown.Item>
                        <Dropdown.Item href="/about/referral-program">
                          {t('Referral Program')}
                        </Dropdown.Item>
                        <Dropdown.Item href="/about/mortgage-insight">
                          {t('Mortgage Insight')}
                        </Dropdown.Item>
                        <Dropdown.Item href="/about/mortgage-article">
                          {t('Mortgage Article')}
                        </Dropdown.Item>
                        <Dropdown.Item href="/about/mortgage-news">
                          {t('Mortgage News')}
                        </Dropdown.Item>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                  {/* Contact */}
                  <div className="menu-nav">
                    <Link to="/contact" className="nav-link-inner--text link-item">{t('Contact')}</Link>
                  </div> 

                  {/* language */}
                  <div className="menu-nav flag">
                    {/* English */}
                    <img className="en-flag" onClick={() => this.handleClick('en')} alt="English" src={require("assets/img/flag/canada.png")} />
                    {/* 中文 */}
                    <img className="zh-flag" onClick={() => this.handleClick('zh')} alt="English" src={require("assets/img/flag/chinese.png")} />
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar> 
        </header>
      </>  
    );
  }
}
export default withNamespaces()(HeaderNavbar);