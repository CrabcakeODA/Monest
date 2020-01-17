import React, { Component } from 'react';
import { Link } from "react-router-dom";
import about1 from "assets/img/about/about1.jpg";
import about2 from "assets/img/about/about2.jpg";
import about3 from "assets/img/about/about3.jpg";
import about4 from "assets/img/about/about4.jpg";
import about5 from "assets/img/about/about5.jpg";
import about6 from "assets/img/about/about6.jpg";
import 'scss/BasicStyle.scss';
import "scss/TopTitle.scss";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    Container,
    Row,
    Col
} from "reactstrap";

export default class About extends Component {
    render() {
        return (
            <div className="Mortgage">
                <div className="titleContainer">
                    <h1 className="title">About Monest</h1>
                </div>
                <div className="section">
                    <Container>
                        <div>
                            <h2 className="mb-3 mb-0">About Monest</h2>
                            <div className="mb-5 border-bottom"></div>
                            <section className="section section-lg py-3">
                                <Container>
                                    <Row className="second-row">
                                        <Col md="6" className="pl-0 first-time-home-buyer">
                                            <Card className="shadow">
                                                <CardImg src={about1} style={{ height: "300px", width: "100%" }} />
                                                <CardBody>
                                                    <h5>Our Story</h5>
                                                    <CardText>
                                                        On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter.
                                                    </CardText>
                                                    <Link to="/calculator/mortgage-affordability-calculator">
                                                        <Button onClick={this.setRedirect}
                                                            className="btn-neutral btn-round ml-1" variant="primary">
                                                            View Details
                                                    </Button>
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="6" className="pr-0 inversment-properties">
                                            <Card className="shadow">
                                                <CardImg src={about2} style={{ height: "300px", width: "100%" }} />
                                                <CardBody>
                                                    <h5>Agents</h5>
                                                    <CardText>
                                                        On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter.
                                                    </CardText>
                                                    <Link to="/calculator/mortgage-payment-calculator">
                                                        <Button className="btn-neutral btn-round ml-1" variant="primary">View Details</Button>
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="6" className="mt-5 pl-0 first-time-home-buyer">
                                            <Card className="shadow">
                                                <CardImg src={about3} style={{ height: "300px", width: "100%" }} />
                                                <CardBody>
                                                    <h5>Referral Program</h5>
                                                    <CardText>
                                                        On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter.
                                                    </CardText>
                                                    <Link to="/calculator/mortgage-affordability-calculator">
                                                        <Button onClick={this.setRedirect}
                                                            className="btn-neutral btn-round ml-1" variant="primary">
                                                            View Details
                                                    </Button>
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="6" className="mt-5 pr-0 inversment-properties">
                                            <Card className="shadow">
                                                <CardImg src={about4} style={{ height: "300px", width: "100%" }} />
                                                <CardBody>
                                                    <h5>Mortgage Insight</h5>
                                                    <CardText>
                                                        On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter.
                                                    </CardText>
                                                    <Link to="/calculator/mortgage-payment-calculator">
                                                        <Button className="btn-neutral btn-round ml-1" variant="primary">View Details</Button>
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="6" className="mt-5 pl-0 first-time-home-buyer">
                                            <Card className="shadow">
                                                <CardImg src={about5} style={{ height: "300px", width: "100%" }} />
                                                <CardBody>
                                                    <h5>Mortgage Article</h5>
                                                    <CardText>
                                                        On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter.
                                                    </CardText>
                                                    <Link to="/calculator/mortgage-affordability-calculator">
                                                        <Button onClick={this.setRedirect}
                                                            className="btn-neutral btn-round ml-1" variant="primary">
                                                            View Details
                                                    </Button>
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="6" className="mt-5 pr-0 inversment-properties">
                                            <Card className="shadow">
                                                <CardImg src={about6} style={{ height: "300px", width: "100%" }} />
                                                <CardBody>
                                                    <h5>Mortgage News</h5>
                                                    <CardText>
                                                        On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter.
                                                    </CardText>
                                                    <Link to="/calculator/mortgage-payment-calculator">
                                                        <Button className="btn-neutral btn-round ml-1" variant="primary">View Details</Button>
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}