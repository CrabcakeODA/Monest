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
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    ListGroup, 
    ListGroupItem
  } from "reactstrap";

  export default class Contact extends Component{
    render(){
        return(
            <div className = "Contact">
                 <div className = "header-and-feature">
                    <p className = "h1">Contact</p>
                </div>
                <div className = "main-container">
                    <Container className="container-lg">
                        <Row className ="first-row">
                            <Col className = "border-bottom"><p className = "h2">Contact Monest</p></Col>
                        </Row> 
                        <Row>
                            <Col md = "6">
                                <Form>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="name" name="name" id="name" placeholder="Your full name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="age">age</Label>
                                        <Input type="age" name="age" id="age" placeholder="Your age" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Select</Label>
                                        <Input type="email" name="email" id="email" placeholder = "Please input your email addres" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Text Area</Label>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col className = "border-bottom">
                                <p className = "h5">Contact Monest</p>
                                <Card  style={{ width: '25rem' }}>                           
                                    <CardBody>
                                    <CardTitle>加拿大多伦多 华旗金融总部</CardTitle>
                                    <CardText>Unit #1008, 250 Consumers Road. </CardText>   
                                    <CardText>Toronto ON Canada, M2J 4V6</CardText>
                                    </CardBody>
                                </Card>
                                <br></br>
                                <Card  style={{ width: '25rem' }}>                           
                                    <CardBody>
                                    <CardTitle>加拿大 华旗金融办事处</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                                <br></br>
                                <Card  style={{ width: '25rem' }}>                           
                                    <CardBody>
                                    <CardTitle>中国 华旗金融办事处</CardTitle>
                                    <CardText>中国 华旗金融办事处</CardText>
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