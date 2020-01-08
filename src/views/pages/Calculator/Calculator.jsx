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

export default class Calculator extends Component
{
    render(){
        return(
            <div className = "Calculator">
                <div className = "Header-and-Feature">
                    <h1 className = "Main-Title">Calculator</h1>
                </div>
                <div className = "Main-Container">
                        <Container>
                            <Row className ="First-Row">
                                <Col className = "Sub-Title"><h2>Calculator</h2></Col>
                            </Row>
                            <Row className = "Second-Row">
                                <Col className = "Our-Story">
                                    <Card className= "Card" style={{ width: '18rem' }}>
                                        <CardImg src = {pic1} />
                                        <CardBody>
                                            <CardTitle>Mortgage Affordability Calculator</CardTitle>
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
                                            <CardTitle>Mortgage Payment Calculator</CardTitle>
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
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                </div>

            </div>
        )
    }
}