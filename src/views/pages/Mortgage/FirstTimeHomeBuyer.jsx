import React from 'react';
import { connect } from "react-redux";
import classnames from "classnames";

// reactstrap components
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button,
    Card,
    CardBody,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";
  
  // core components
  import HeaderNavbar from "components/Navbars/HeaderNavbar.jsx";
  import SimpleFooter from "components/Footers/SimpleFooter.jsx";
  import styled from 'styled-components'



  export default class FirstTimeHomeBuyer extends React.Component{
      
    constructor(props) {
        super(props);
        this.state = {
        activeIndex: 0,
        animating: false,
        };
    }
        render(){
            return(
                <div className = "first-time-home-buyer">
                    <div className = "header-and-feature">
                        <p className = "h1">FIrst Time Home Buyer</p>
                    </div>
                    <div className = "main-container">
                        <Container className="container-lg">
                            <Row className ="first-row">
                                <Col className = "border-bottom"><p className = "h2">Choose your perfect plan</p></Col>
                            </Row>
                            <br></br>
                            <Row className = "second-row">
                                <Col lg="6" className = "apply-form">
                                    <Card className="profile-page">
                                        <CardBody className="p-lg-5">
                                        <h4 className="mb-1">We want to hear from you!</h4>
                                        <p className="mt-0">
                                            Your finance is very important to us.
                                        </p>
                                        <Row className = "full-name">
                                            <Col lg = "6" className = "first-name">
                                                <FormGroup
                                                    className={classnames({
                                                    focused: this.state.nameFocused
                                                    })}
                                                >
                                                    <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                        <i className="ni ni-user-run" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="First name"
                                                        type="text"
                                                        onFocus={e => this.setState({ nameFocused: true })}
                                                        onBlur={e => this.setState({ nameFocused: false })}
                                                    />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                            <Col lg = "6" className = "last-name">
                                                <FormGroup
                                                    className={classnames( {
                                                    focused: this.state.nameFocused
                                                    })}
                                                >
                                                    <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                        <i className="ni ni-user-run" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Last name"
                                                        type="text"
                                                        onFocus={e => this.setState({ nameFocused: true })}
                                                        onBlur={e => this.setState({ nameFocused: false })}
                                                    />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup
                                            className={classnames({
                                            focused: this.state.nameFocused
                                            })}
                                        >
                                            <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-user-run" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Phone Number"
                                                type="text"
                                                onFocus={e => this.setState({ nameFocused: true })}
                                                onBlur={e => this.setState({ nameFocused: false })}
                                            />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup
                                            className={classnames({
                                            focused: this.state.emailFocused
                                            })}
                                        >
                                            <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                <i className="ni ni-email-83" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Email Address"
                                                type="email"
                                                onFocus={e => this.setState({ emailFocused: true })}
                                                onBlur={e => this.setState({ emailFocused: false })}
                                            />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup
                                            className={classnames({
                                            focused: this.state.nameFocused
                                            })}
                                        >
                                            <InputGroup className="input-group-alternative">
                                            <Input
                                                type="select"
                                                onFocus={e => this.setState({ nameFocused: true })}
                                                onBlur={e => this.setState({ nameFocused: false })}
                                            >
                                                <option>I am interested in...</option>
                                                <option>get an advice on suitable mortgage plan</option>
                                                <option>knowing more details for First-buyer Incentive</option>
                                            </Input>
                                           
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup className="mb-4">
                                            <Input
                                            className="form-control-alternative"
                                            cols="80"
                                            name="name"
                                            placeholder="Type a message..."
                                            rows="4"
                                            type="textarea"
                                            />
                                        </FormGroup>
                                        <div>
                                            <Button
                                            block
                                            className="btn-round"
                                            color="default"
                                            size="lg"
                                            type="button"
                                            >
                                            Send Message
                                            </Button>
                                        </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg = "6" className = "apply-info">
                                    <p className = "h1">First Time Home Buyer</p>
                                    <p className ="list-group-content">
                                    There are many benefits and incentives that first-time home buyer can get.
                                    Take a look for the following point if you’re looking to take the big leap of
                                    becoming a first-time homebuyer:
                                    </p>
                                    <ul className = "list-group-content">
                                        <li>wertyuio</li>
                                        <li>23456789okmjhgf</li>
                                        <li>dcfvbnmkiuyhgfcvbnm</li>
                                    </ul>
                                    <p className ="list-group-content">
                                        If you’re a Canadian citizen, applying for a mortgage is a fairly simple process.
                                        If you’re a Canadian citizen, applying for a mortgage is a fairly simple process.
                                        If you’re a Canadian citizen, applying for a mortgage is a fairly simple process.
                                        If you’re a Canadian citizen, applying for a mortgage is a fairly simple process.
                                        If you’re a Canadian citizen, applying for a mortgage is a fairly simple process.
                                                
                                    </p>
                                    <ol className = "list-group-content">
                                        <li>First-Time Home Buyer’s Tax Credit—This program amounts to a $750 rebate for 
                                            first-time buyers and is meant to help defray housing costs such as legal and inspection fees. 
                                            To receive the credit, you must claim it on your tax return.
                                        </li>
                                        <li>dghjuklsx,cmnbghjuxikol,m</li>
                                        <li>cdfghjkjhbvbnjmk,jhgfghjkljnhgbvhjnk</li>
                                        <li>dfghjkjhgvfcvgbhnjmklkjhgfghjkl</li>
                                        <li>dfghjkhgfdfghjkjhgvfcvgbhjnmk,mjnhgbvhjk</li>
                                    </ol>     
                                    <p className ="list-group-content">
                                        If you’re a Canadian citizen, applying for a mortgage is a fairly simple process.
                                        If you’re a Canadian citizen, applying for a mortgage is a fairly simple process.
                                        If you’re a Canadian citizen, applying for a mortgage is a fairly simple process.
                                        If you’re a Canadian citizen, applying for a mortgage is a fairly simple process.
                                        If you’re a Canadian citizen, applying for a mortgage is a fairly simple process.
                                    </p>

                                </Col>
                            </Row>


                        </Container>
                    </div>
                </div>
            )
        }

  } 