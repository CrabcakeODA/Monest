import React, { Component } from 'react';
import "scss/OurStory.scss";

import {
    Container,
    Table
} from "reactstrap";

export default class MortgageArticle extends Component {
    render() {
        return (
            <div >
                <div className="titleContainer">
                    <h1 className="title">Mortgage Articles</h1>
                </div>
                <section className="section">
                    <Container>
                        <h2 className="ml-2 mb-3">Monest Financial Articles</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Feature</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">November 7, 2019</th>
                                    <td>
                                        Why the mortgage stress test has proved so controversial for first-time homebuyers — and retirees </td>
                                </tr>
                                <tr>
                                    <th scope="row">October 12, 2019</th>
                                    <td>
                                        Learn the intricacies and risks of FTHBI before buying in </td>
                                </tr>
                                <tr>
                                    <th scope="row">September 28, 2019</th>
                                    <td>
                                        CPC launches four-prong approach to housing affordability </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </section>
            </div>
        )
    }
}