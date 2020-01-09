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
import React from 'react';
import { connect } from "react-redux";
import classnames from "classnames";

// reactstrap components
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import HeaderNavbar from "components/Navbars/HeaderNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

// index page sections
import { getPageData } from "../../actions/data";

import styled from 'styled-components'

const items = [
  {
    src: "assets/img/bg/bg-1.jpeg",
    altText: 'bg-1.jpeg',
    caption: 'We Lock lowest mortgage rate today'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'bg-2.jpeg',
    caption: 'Learning your benefits and suitable plans as a first time buyer or new immigrant'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'bg-3.jpeg',
    caption: 'Want to look for how you can afford your mortgage?'
  }
];

const CarsouelImg = styled.img`
  object-fit:cover;
  width: 100vw;
  max-height: 100vh;
`

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false,
    };
  }

  componentDidMount() {
    this.props.getPageData();
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  nextCarouselPage = () => {
    if (!this.state.animating) {
      let nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({
        activeIndex: nextIndex
      })
    }
  }

  previousCarouselPage = () => {
    if (!this.state.animating) {
      let nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({
        activeIndex: nextIndex
      })
    }
  }

  goToCarouselPage = (newIndex) => {
    if (!this.state.animating) {
      this.setState({
        activeIndex: newIndex
      })
    }
  }

  setAnimatingStatus = (animatingStatus) => {
    this.setState({ animating: animatingStatus })
  }

  render() {
    let slides = items.map((item) =>
      <CarouselItem
        onExiting={() => this.setAnimatingStatus(true)}
        onExited={() => this.setAnimatingStatus(false)}
        key={item.src}
      >
        <CarsouelImg width='100%' height='80%' src={require(`assets/img/bg/${item.altText}`)} alt={item.altText} />
        <CarouselCaption className="align-items-center justify-content-center m-0 p-0" captionHeader={item.caption} />
      </CarouselItem>
    );

    return (
      <>
        <main ref="main">
          <div className="position-relative">
            <section className="section p-0">
              <HeaderNavbar />
              <div className="">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="d-flex p-0 m-0">
                <div className="p-0 m-0">
                  <Carousel
                    activeIndex={this.state.activeIndex}
                    next={this.nextCarouselPage}
                    previous={this.previousCarouselPage}
                  >
                    <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToCarouselPage} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previousCarouselPage} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.nextCarouselPage} />
                  </Carousel>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points=""
                  />
                </svg>
              </div>
            </section>

            <section className="section section-lg">
              <Container>
                <Row className="justify-content-center text-center mb-lg">
                  <Col lg="8">
                    <h2 className="display-3">Start an application</h2>
                    <p className="lead text-muted">
                      lowest rate and the most professional service served by Monest
                    </p>
                  </Col>
                </Row>
                <Row className="mb-5">
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                    <div className="px-4 card-profile-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="Purchase"
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      </a>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="4" md="6">
                    <div className="px-4 card-profile-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      </a>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="4" md="6">
                    <div className="px-4 card-profile-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        A beautiful Design System{" "}
                        <span>completed with examples</span>
                      </h1>
                      <p className="lead text-white">
                        The design system comes with four pre-built pages to
                        help you get started faster. You can change the text and
                        images and you're good to go.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Download Argon
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Build Something
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Awesome features</h3>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Carefully crafted components
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Design System
                      </h4>
                      <p className="lead text-italic text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our customers</h3>
                    <p className="lead">
                      Don't let your uses guess by attaching tooltips and
                      popoves to any element. Just make sure you enable them
                      first via JavaScript.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Modern Interface</h4>
                      <p className="text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Modular Components
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg py-5">
            <Container>
              <Row className="justify-content-center text-center mb-sm">
                <Col lg="8">
                  <h2 className="display-3">Our partners</h2>
                </Col>
              </Row>
              <Row>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/TDBank.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/Scotiabank.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/Manulife.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/BankOfChina.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/HSBC.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/StreetCapital.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/HomeTrust.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/B2BBank.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/EQBank.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/ICSaving.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/FirstNationalFinancial.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/Merix.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/MarathonMortgageCorp.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/Lendwise.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/MCAP.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/AlternaBank.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/CMLS.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/CommunityTrust.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/DUCA.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/Meridian.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-0 mb-3">
                    <img
                      alt="..."
                      className="img-center"
                      src={require("assets/img/partner/HomeEquityBank.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-end text-right mb-sm">
                <Col>
                  <h6>Centum Monest Mortgage Inc. License: #12289</h6>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Build something</h2>
                  <p className="lead text-white">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Building tools</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Grow your market</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Launch time</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    pageData: data.pageData
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getPageData: () => {
      dispatch(getPageData());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
