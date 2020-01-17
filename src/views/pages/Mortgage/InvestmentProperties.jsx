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



  export default class InvestmentProperties extends React.Component{
      
    constructor(props) {
        super(props);
        this.state = {
        activeIndex: 0,
        animating: false,
        };
    }
        render(){
            return(
                <div className = "investment-properties">
                    <div className = "header-and-feature">
                        <p className = "h1">Investment Properties</p>
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
                                                <option disabled selected>I am interested in...</option>
                                                <option>the best rate and advice that I can get for buying the investment property</option>
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
                                    <p className = "h1">Investment Properties</p>  
                                    <p className ="list-group-content">
                                    You may already own a primary residence and are now considering buying a home for investment purposes. 
                                    Mortgage rates on investment properties (owner occupied) are similar to those for primary mortgages.
                                    But some lenders do not offer it to investment property mortgages at all. 
                                    Our experienced team can provide you professional advice on what’s the best mortgage plan for buying a 
                                    investment property. 
                                    </p>
                                    <p className ="list-group-content">Want to find out what the best rate and advice that you can get for investment property?</p> 
                                    <p className ="h5"><strong>contact Monest today!</strong></p>
                                    

                                </Col>
                            </Row>


                        </Container>
                    </div>
                </div>
            )
        }

  } 