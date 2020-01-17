import React, { Component } from 'react';
import 'scss/BasicStyle.scss';

import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Table
} from "reactstrap";

export default class MortgageNews extends Component {
    render() {
        return (
            <div className="About">
                <div className="titleContainer">
                    <h1 className="title">Mortgage News</h1>
                </div>
                <section className="section">
                    <Container>
                        <div>
                            <h2 className="mb-3 mb-0">Monest Financial News</h2>
                            <div className="border-bottom"></div>
                            <p className="mt-4 mb-0">
                                Mike XXXXX, Media Contact
                            </p>
                            <p className="mb-0">
                                press@canwise.com
                            </p>

                            <section className="section section-lg py-3">
                                <Container>
                                    <Row className="justify-content-center text-center mb-sm">
                                        <Col lg="8">
                                            <h2 className="display-3">Media Appearances</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-5 px-0 mb-5 mb-lg-0" lg="6" md="6">
                                            <div className="px-0 mb-3">
                                                <video width="440" controls>
                                                    <source src="" type="video/mp4" />
                                                    <source src="" type="video/ogg" />
                                                    Your browser does not support HTML5 video.
                                                </video>
                                                <p className="my-2">Media Name</p>
                                                Battirent suspendue ah on corbeille concierge petillent ai.
                                                On disait tuiles frenes du jurons.
                                            </div>
                                        </Col>
                                        <Col className="pr-5 px-0 mb-5 mb-lg-0" lg="6" md="6">
                                            <div className="px-0 mb-3">
                                                <video width="440" controls>
                                                    <source src="" type="video/mp4" />
                                                    <source src="" type="video/ogg" />
                                                    Your browser does not support HTML5 video.
                                                </video>
                                                <p className="my-2">Media Name</p>
                                                Battirent suspendue ah on corbeille concierge petillent ai.
                                                On disait tuiles frenes du jurons.    </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>

                            <section className="section section-lg py-3">
                                <Container>
                                    <Row className="justify-content-center text-center mb-sm">
                                        <Col lg="8">
                                            <h2 className="display-3">As seen on</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="px-0 mb-5 mb-lg-0" lg="4" md="6">
                                            <div className="px-0 mb-3">
                                                <img
                                                    alt="..."
                                                    className="img-center"
                                                    src={require("assets/img/partner/TDBank.png")}
                                                    style={{ width: "200px" }}
                                                />
                                            </div>
                                        </Col>
                                        <Col className="px-0 mb-5 mb-lg-0" lg="4" md="6">
                                            <div className="px-0 mb-3">
                                                <img
                                                    alt="..."
                                                    className="img-center"
                                                    src={require("assets/img/partner/Scotiabank.png")}
                                                    style={{ width: "200px" }}
                                                />
                                            </div>
                                        </Col>
                                        <Col className="px-0 mb-5 mb-lg-0" lg="4" md="6">
                                            <div className="px-0 mb-3">
                                                <img
                                                    alt="..."
                                                    className="img-center"
                                                    src={require("assets/img/partner/Manulife.png")}
                                                    style={{ width: "200px" }}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>

                            <h2 className="display-3">All News</h2>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Feature</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">November 7, 2019</th>
                                        <td>
                                            <p>Canada.com</p>
                                            Why the mortgage stress test has proved so controversial for first-time homebuyers — and retirees </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">October 12, 2019</th>
                                        <td>
                                            <p>Toronto Sun</p>
                                            Learn the intricacies and risks of FTHBI before buying in </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">September 28, 2019</th>
                                        <td>
                                            <p>Edmonton Examiner</p>
                                            CPC launches four-prong approach to housing affordability </td>
                                    </tr>
                                </tbody>
                            </Table>


                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}