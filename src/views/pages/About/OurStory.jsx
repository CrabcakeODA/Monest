import React, { Component } from 'react';
import "scss/OurStory.scss";

import {
    Container,
} from "reactstrap";

export default class OurStory extends Component {
    render() {
        return (
            <div className="About">
                <div className="header-and-feature">
                    <p className="h1">Our Story</p>
                </div>
                <section className="section section-lg">
                    <Container>
                        <div className="pr-md-5">
                            <h2>#1st ranked</h2>
                            <p>
                                We are ranked as the 1st as the biggest mortgage broker for over 12 consecutive years.
                            </p>
                            <ul className="list-unstyled mt-5">
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <h1 className="story-number">
                                            89
                                        </h1>
                                        <div>
                                            <h6 className="mb-0">
                                                Banks and financial institute
                                                    </h6>
                                            <p>
                                                Because of volume and professionalism, We work with big banks, small banks, and trustful financial  institutions and receive the best rate from them
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <h1 className="story-number">
                                            198
                                            </h1>
                                        <div>
                                            <h6 className="mb-0">
                                                Mortgage Specialist
                                            </h6>
                                            <p>
                                                198 Mortgage Specialists work for our company and provide you with the professional advice to get you the best mortgage plan
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <h1 className="story-number">
                                            17+
                                        </h1>
                                        <div>
                                            <h6 className="mb-0">
                                                Years of history
                                                    </h6>
                                            <p>
                                                Established on 2002, we have 17+ years history to provide the warm and professional service to our customer
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}