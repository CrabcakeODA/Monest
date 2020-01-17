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

export default class Calculator extends Component
{
    render(){
        return(
            <div className = "Calculator">
                <div className = "titleContainer">
                    <h1 className = "title">Calculator</h1>
                </div>
                <div className = "main-container">
                    <Container className="container-lg">
                        <Row className ="first-row">
                            <Col className = "border-bottom"><p className = "h2">Mortgage Calculator</p></Col>
                        </Row>
                        <br></br>
                        <Row className = "second-row">
                            <Col className = "mortgage-affordability-calculator">
                                <Card className= "card-lift--hover shadow border-0" style={{ width: '25rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Mortgage Affordability Calculator</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">Check Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className = "mprtgage-payment-calculator">
                                <Card className= "card-lift--hover shadow border-0" style={{ width: '25rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Mortgage Payment Calculato</CardTitle>
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