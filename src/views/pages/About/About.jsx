import React, {component, Component} from 'react';
import { connect } from "react-redux";
import classnames from "classnames";
import pic1 from "../SCSS/pic1.png"
import '../SCSS/BasicStyle.scss';

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
    Col
  } from "reactstrap";

export default class About extends Component
{
    render(){
        return(
            <div className = "About">
                <div className = "Header-and-Feature">
                    <h1 className = "Main-Title">About Monest</h1>
                </div>
                <div className = "Main-Container">
                        <Container>
                            <Row className ="First-Row">
                                <Col className = "Sub-Title"><h2>About Monest</h2></Col>
                            </Row>
                            <Row className = "Second-Row">
                                <Col className = "Our-Story">
                                    <Card className= "Card" style={{ width: '18rem' }}>
                                        <CardImg src = {pic1} />
                                        <CardBody>
                                            <CardTitle>Our Story</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                            <CardText>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </CardText>
                                            <Button variant="primary">Check Details</Button>
                                        </CardBody>
                                    </Card>

                                </Col>
                                <Col className = "Agents">
                                    <Card className= "Card" style={{ width: '18rem' }}>
                                        <CardImg src = {pic1} />
                                        <CardBody>
                                            <CardTitle>Agents</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                            <CardText>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </CardText>
                                            <Button variant="primary">Check Details</Button>
                                        </CardBody>
                                    </Card>
                            </Col>
                            </Row>
                            <Row className = "Third-Row">
                                <Col className = "Referral-Program">
                                    <Card className= "Card" style={{ width: '18rem' }}>
                                        <CardImg src = {pic1} />
                                        <CardBody>
                                            <CardTitle>Referral Program</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                            <CardText>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </CardText>
                                            <Button variant="primary">Check Details</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col className = "Mortgage-Insight">
                                    <Card className= "Card" style={{ width: '18rem' }}>
                                        <CardImg src = {pic1} />
                                        <CardBody>
                                            <CardTitle>Mortgage Insight</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                            <CardText>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </CardText>
                                            <Button variant="primary">Check Details</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className = "Forth-Row">
                                <Col className = "Mortgage-Article">
                                    <Card className= "Card" style={{ width: '18rem' }}>
                                        <CardImg src = {pic1} />
                                        <CardBody>
                                            <CardTitle>Mortgage Article</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                            <CardText>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </CardText>
                                            <Button variant="primary">Check Details</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col className = "Mortgage-News">
                                    <Card className= "Card" style={{ width: '18rem' }}>
                                        <CardImg src = {pic1} />
                                        <CardBody>
                                            <CardTitle>Mortgage News</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                            <CardText>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </CardText>
                                            <Button variant="primary">Check Details</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                        </Container>

                </div>

            </div>
        )
    }
}