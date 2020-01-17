import React, { Component } from 'react';
import "scss/OurStory.scss";

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

export default class MortgageInsight extends Component {
    render() {
        return (
            <div className="About">
                <div className="header-and-feature">
                    <p className="h1">Mortgage Insight</p>
                </div>
                <section className="section section-lg">
                    <Container>
                        <div className="pr-md-5">
                            <h2>Mortgage Insight</h2>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}