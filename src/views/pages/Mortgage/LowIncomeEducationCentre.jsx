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



export default class LowIncomeEducationCentre extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            animating: false,
        };
    }
    render() {
        return (
            <div className="About">
                <div className="titleContainer">
                    <h1 className="title">Low Income Education Centre</h1>
                </div>
                <section className="section">
                    <Container>
                        <div>
                            <section className="section section-lg py-3">
                                <Container>
                                    <Row className="second-row">
                                        <Col lg="6" className="pr-4 mb-5 apply-info">
                                            <h2 className="mt-5 mb-3">Low Income Education Centre</h2>
                                            <p className="list-group-content">
                                                Many of the company they claimed that they have good rate but are only available to homebuyers
                                                with good income. In Monest, We take care of the Low Income Family too.
                                                Don’t be turned away and give up your dream for buying a place to own.
                                                We work with lenders that offer excellent mortgage options for low income or self-employed Canadian.
                                            </p>
                                            <strong>Contact Monest if you ‘re interested!</strong>
                                        </Col>
                                        <Col lg="6" className="pl-4 apply-form">
                                            <Card className="profile-page">
                                                <CardBody className="p-lg-5">
                                                    <h4 className="mb-4">Low Income Contact Form</h4>
                                                   <Row className="full-name">
                                                        <Col lg="6" className="first-name">
                                                            <FormGroup
                                                                className={classnames({
                                                                    focused: this.state.nameFocused
                                                                })}
                                                            >
                                                                <InputGroup className="input-group-alternative">
                                                                    <Input
                                                                        placeholder="First name"
                                                                        type="text"
                                                                        onFocus={e => this.setState({ nameFocused: true })}
                                                                        onBlur={e => this.setState({ nameFocused: false })}
                                                                    />
                                                                </InputGroup>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col lg="6" className="last-name">
                                                            <FormGroup
                                                                className={classnames({
                                                                    focused: this.state.nameFocused
                                                                })}
                                                            >
                                                                <InputGroup className="input-group-alternative">
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
                                                                <option>What rate I can get as the low income or bad credit history</option>
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
                                    </Row>
                                </Container>
                            </section>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
} 