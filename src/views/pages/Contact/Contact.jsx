import React, {component, Component} from 'react';
import { connect } from "react-redux";
import classnames from "classnames";
import pic1 from "scss/pic1.png"
import 'scss/BasicStyle.scss';

import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
    ListGroup, 
    ListGroupItem,
    table
  } from "reactstrap";

  export default class Contact extends Component{
    render(){
        return(
            <div className = "Contact">
                <div className = "titleContainer">
                    <h1 className = "title">Contact</h1>
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
                                    <CardText>Unit #1008, 250 Consumers Road.</CardText>
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