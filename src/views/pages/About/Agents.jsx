import React, { Component } from 'react';
import "scss/OurStory.scss";

import {
    Container,
} from "reactstrap";

export default class Agents extends Component {
    render() {
        return (
            <div className="About">
                <div className="header-and-feature">
                    <p className="h1">Agents</p>
                </div>
                <section className="section section-lg">
                    <Container>
                        <div className="pr-md-5">
                            <h2>Agents</h2>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}