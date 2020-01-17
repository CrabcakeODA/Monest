import React, {component, Component} from 'react';
import { connect } from "react-redux";
import classnames from "classnames";
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
                            <Col md = "6" className = "mortgage-affordability-calculator">
                                <Card className= "shadow" style={{ width: '27.5rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Mortgage Affordability Calculator</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">View Details</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md = "6" className = "mprtgage-payment-calculator">
                                <Card className= "shadow" style={{ width: '27.5rem' }}>
                                    <CardImg src = {pic1} />
                                    <CardBody>
                                        <CardTitle>Mortgage Payment Calculato</CardTitle>
                                        <CardText>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </CardText>
                                        <Button className = "btn-neutral btn-round ml-1" variant="primary">View Details</Button>
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