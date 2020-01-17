import React, {component, Component} from 'react';
import { connect } from "react-redux";
import classnames from "classnames";
import pic1 from "scss/pic1.png"
import 'scss/BasicStyle.scss';
import "scss/TopTitle.scss";
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

export default class About extends Component
{
    render(){
        return(
            <div className = "About">
                <div className = "titleContainer">
                    <h1 className = "title">About Monest</h1>
                </div>
                <div className = "main-container">
                    <Container className="container-lg">
                        <Row className ="first-row">
                            <Col className = "border-bottom"><p className = "h2">About Monest</p></Col>
                        </Row>
                        <br></br>
                        <Row className = "second-row">
                            <Col md = "6" className = "our-story">
                                <Card className= "shadow" style={{ width: '27.5rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Our Story</CardTitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md = "6" className = "Agents">
                                <Card className= "shadow" style={{ width: '27.5rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Agents</CardTitle>
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
                            <Col md = "6" className = "referral-program">
                                <Card className= "shadow" style={{ width: '27.5rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Referral Program</CardTitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md = "6" className = "mortgage-insight">
                                <Card className= "shadow"  style={{ width: '27.5rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Mortgage Insight</CardTitle>
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
                            <Col md = "6" className = "mortgage-article">
                                <Card className= "shadow" style={{ width: '27.5rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Mortgage Article</CardTitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md = "6" className = "mortgage-news">
                                <Card className= "shadow" style={{ width: '27.5rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Mortgage News</CardTitle>
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