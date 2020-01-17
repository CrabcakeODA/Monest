import React, { Component } from 'react';
import 'scss/BasicStyle.scss';
import 'scss/SecondPage.scss';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
    Button
} from "reactstrap";

export default class Contact extends Component {
    render() {
        return (
            <div className="Mortgage">
                <div className="titleContainer">
                    <h1 className="title">Contact</h1>
                </div>
                <div className="section">
                    <Container>
                        <div>
                            <h2 className="mb-3 mb-0">Contact Monest</h2>
                            <p>Monest Financial Group headquartered in 250 Consumers Road in North York. The major intersection is sheppard/Consumers Road. The surrounding landmark are Don Mills Subway station and Fairview Mall. It’s a really convenient location where many businesses-centered areas and many free parking is available once you get there.</p>
                            <section className="section section-lg py-3">
                                <Container>
                                    <Row>
                                        <Col md="6" className="pl-0">
                                            <Form>
                                                <h5 className="mb-3">We're ready, Let's talk</h5>
                                                <FormGroup>
                                                    <Label for="name">Name</Label>
                                                    <Input type="name" name="name" id="name" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="email">E-mail</Label>
                                                    <Input type="email" name="email" id="email" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="exampleText">Message</Label>
                                                    <Input type="textarea" name="text" id="exampleText" />
                                                </FormGroup>
                                                <Button
                                                    block
                                                    className="mt-4 btn-round"
                                                    color="default"
                                                    size="lg"
                                                    type="button"
                                                >
                                                    Send Message
                                                </Button>
                                            </Form>
                                        </Col>
                                        <Col md="6" className="contact-right-group">
                                            <h5 className="my-1 mb-3">Contact info</h5>
                                            <strong>
                                                Address
                                            </strong>
                                            <p className="my-1">Unit #1008 </p>
                                            <p className="my-1">250 Consumers Road</p>
                                            <p className="my-1">Toronto </p>
                                            <p className="my-1 mb-3">M2J 4V6 </p>

                                            <strong className="mt-5">
                                                Email Us
                                            </strong>
                                            <p className="my-1 mb-3">office@monest.ca</p>

                                            <strong className="mt-5">
                                                Call Us
                                            </strong>
                                            <p className="my-1 mb-3">+1 416-855-4565</p>

                                            <h5>How to get there by TTC ?</h5>
                                            <p>
                                                1. Take the bus 167 and get off the bus at pharmacy north to Steeles Via Consumers Road. Walk in about 1 minute to arrive to our building.
                                            </p>
                                            <p>
                                                2. Take the bus 985/85 and get off the bus at Sheppard Avenue/Consumers Road, Walk in about 8 minutes to arrive to our building.
                                            </p>

                                            <div>
                                                <h5>Map</h5>
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.050237847296!2d-79.33300958449838!3d43.771815979117406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d2592d50433d%3A0x1d01f41caebd022c!2s250%20Consumers%20Rd%2C%20North%20York%2C%20ON%20M2J%204R4!5e0!3m2!1szh-CN!2sca!4v1579291301790!5m2!1szh-CN!2sca"
                                                    width="100%"
                                                    height="300"
                                                    frameborder="0"
                                                    allowfullscreen="">
                                                </iframe>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}