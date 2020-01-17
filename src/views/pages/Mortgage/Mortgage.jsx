import React, { component, Component } from 'react';
import { connect } from "react-redux";
import classnames from "classnames";
import { Link, Redirect } from "react-router-dom";
import pic1 from "scss/pic1.png"
import 'scss/BasicStyle.scss';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Container,
    Row,
    Col
} from "reactstrap";




export default class Mortgage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            animating: false,
        };
    }

    setRedirect = () => {

        this.state = {
            activeIndex: 1,
            animating: true,
        };
        if (this.state.animating) {

            return <Redirect to='/Calculator' />
        }

    }

    renderRedirect = () => {


    }

    render() {

        return (
            <div className="Mortgage">
                <div className="titleContainer">
                    <h1 className="title">Mortgage</h1>
                </div>
                <div className="main-container">
                    <Container className="container-lg">
                        <Row className="first-row">
                            <Col className="border-bottom"><p className="h2">Choose your perfect plan</p></Col>
                        </Row>
                        <br></br>
                        <Row className="second-row">
                            <Col md="6" className="first-time-home-buyer">
                                <Card className="shadow" style={{ width: '27.5rem' }}>
                                    <CardImg src={pic1} />
                                    <CardBody>
                                        <CardTitle>First-Time Home Buyer</CardTitle>
                                        <CardText>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </CardText>

                                        <Button onClick={this.setRedirect}
                                            className="btn-neutral btn-round ml-1" variant="primary">
                                            Check Details
                                        </Button>

                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6" className="inversment-properties">
                                <Card className="shadow" style={{ width: '27.5rem' }}>
                                    <CardImg src={pic1} />
                                    <CardBody>
                                        <CardTitle>Investment Properties</CardTitle>
                                        <CardText>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </CardText>
                                        <Button className="btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="third-row">
                            <Col md="6" className="new-to-canada">
                                <Card className="shadow" style={{ width: '27.5rem' }}>
                                    <CardImg src={pic1} />
                                    <CardBody>
                                        <CardTitle>New to Canada</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                        <CardText>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </CardText>
                                        <Button className="btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6" className="low-income-education-center">
                                <Card className="shadow" style={{ width: '27.5rem' }}>
                                    <CardImg src={pic1} />
                                    <CardBody>
                                        <CardTitle>Low income Education Center</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                        <CardText>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </CardText>
                                        <Button className="btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br></br>
                    </Container>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        )
    }
}