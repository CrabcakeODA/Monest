import React, { Component } from 'react';
import { Link } from "react-router-dom";
import calculator1 from "assets/img/calculator/calculator1.jpg";
import calculator2 from "assets/img/calculator/calculator2.jpg";
import 'scss/BasicStyle.scss';
import 'scss/SecondPage.scss';

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

export default class Calculator extends Component {
    render() {
        return (
            <div className="Calculator">
                <div className="titleContainer">
                    <h1 className="title">Calculators</h1>
                </div>
                <div className="section">
                    <Container>
                        <div>
                            <h2 className="mb-3 mb-0">Make smarter decisions with our tools and calculators</h2>
                            <div className="border-bottom"></div>
                            <section className="section section-lg py-3">
                                <Container>
                                    <Row className="second-row">
                                        <Col md="6" className="second-main-page-card-left">
                                            <Card className="shadow">
                                                <CardImg src={calculator1} style={{ height: "300px", width: "100%" }} />
                                                <CardBody>
                                                    <h5>Mortgage Affordability Calculator </h5>
                                                    <CardText>
                                                        Determining how much you can afford is the first step in buying a home. Affordability is based on a number of different factors like income, personal expenses, and costs associated with the property. Our calculator estimates the maximum pre-approval amount you can qualify for.
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
                                        <Col md="6" className="second-main-page-card-right">
                                            <Card className="shadow">
                                                <CardImg src={calculator2} style={{ height: "300px", width: "100%" }} />
                                                <CardBody>
                                                    <h5>Mortgage Payment Calculator</h5>
                                                    <CardText>
                                                        Calculate your monthly payment using your purchase price, down payment, amortization period and mortgage rate. Use our calculator to determine your monthly mortgage payment and corresponding amortization schedule, as well as estimate how much cash you'll need for closing costs.
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