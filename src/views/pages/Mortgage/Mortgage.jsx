import React, {Component} from 'react';
import pic1 from "../SCSS/pic1.png"
import '../SCSS/BasicStyle.scss';
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

export default class Mortgage extends Component
{
    render(){
        return(
            <div className = "Mortgage">
                <div className = "titleContainer">
                    <h1 className = "title">Mortgage</h1>
                </div>
                <div className = "main-container">
                    <Container className="container-lg">
                        <Row className ="first-row">
                            <Col className = "border-bottom"><p className = "h2">Choose your perfect plan</p></Col>
                        </Row>
                        <br></br>
                        <Row className = "second-row">
                            <Col className = "first-time-home-buyer">
                                <Card className= "card-lift--hover shadow border-0" style={{ width: '25rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>First-Time Home Buyer</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className = "inversment-properties">
                                <Card className= "card-lift--hover shadow border-0" style={{ width: '25rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Investment Properties</CardTitle>
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
                            <Col className = "new-to-canada">
                                <Card className= "card-lift--hover shadow border-0" style={{ width: '25rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>New to Canada</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className = "low-income-education-center">
                                <Card className= "card-lift--hover shadow border-0" style={{ width: '25rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Low income Education Center</CardTitle>
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
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        )
    }
}