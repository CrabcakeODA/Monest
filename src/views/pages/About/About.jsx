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
                <div className = "header-and-feature">
                    <p className = "h1">About Monest</p>
                </div>
                <div className = "main-container">
                    <Container className="container-lg">
                        <Row className ="first-row">
                            <Col className = "border-bottom"><p className = "h2">About Monest</p></Col>
                        </Row>
                        <br></br>
                        <Row className = "second-row">
                            <Col className = "our-story">
                                <Card className= "card-lift--hover shadow border-0" style={{ width: '25rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Our Story</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className = "Agents">
                                <Card className= "card-lift--hover shadow border-0" style={{ width: '25rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Agents</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                        </Col>
                        </Row>
                        <br></br>
                        <Row className = "third-row">
                            <Col className = "referral-program">
                                <Card className= "card-lift--hover shadow border-0" style={{ width: '25rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Referral Program</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className = "mortgage-insight">
                                <Card className= "card-lift--hover shadow border-0"  style={{ width: '25rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Mortgage Insight</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className = "forth-row">
                            <Col className = "mortgage-article">
                                <Card className= "card-lift--hover shadow border-0" style={{ width: '25rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Mortgage Article</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className = "mortgage-news">
                                <Card className= "card-lift--hover shadow border-0" style={{ width: '25rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Mortgage News</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br></br>
                    </Container>
                </div>
            </div>
        )
    }
}