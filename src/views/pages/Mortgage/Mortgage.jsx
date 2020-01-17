import React, { component, Component } from 'react';
import { connect } from "react-redux";
import classnames from "classnames";
import { Link, Redirect } from "react-router-dom";
import pic1 from "scss/pic1.png"
import 'scss/BasicStyle.scss';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Container,
    Row,
    Col
} from "reactstrap";




export default class Mortgage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            animating: false,
        };
    }

    setRedirect = () => {

        this.state = {
            activeIndex: 1,
            animating: true,
        };
        if (this.state.animating) {

            return <Redirect to='/Calculator' />
        }

    }

    renderRedirect = () => {

    }

    render() {
        return (
            <div className="Mortgage">
                <div className="titleContainer">
                    <h1 className="title">Mortgage</h1>
                </div>
                <div className="section">
                    <Container>
                        <div>
                            <h2 className="mb-4 mb-0">A Mortgage Experience Made Better</h2>
                            <div className="mb-4 border-bottom"></div>
                            <section className="section section-lg py-3">
                                <Container>
                                    <Row className="second-row">
                                        <Col md="6" className="first-time-home-buyer">
                                            <Card className="shadow">
                                                <CardImg src={pic1} />
                                                <CardBody>
                                                    <h5>First-Time Home Buyer</h5>
                                                    <CardText>
                                                        Buying your first home can be a daunting experience. It’s the most expensive purchase you’ll make in your life.
                                                    </CardText>
                                                    <Link to="/mortgage/first-time-home-buyer">
                                                        <Button onClick={this.setRedirect}
                                                            className="btn-neutral btn-round ml-1" variant="primary">
                                                            View Details
                                                    </Button>
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="6" className="inversment-properties">
                                            <Card className="shadow">
                                                <CardImg src={pic1} />
                                                <CardBody>
                                                    <h5>Investment Properties</h5>
                                                    <CardText>
                                                        You may already own a primary residence and are considering buying a home for investment purposes.
                                                    </CardText>
                                                    <Link to="/mortgage/investment-properties">
                                                        <Button className="btn-neutral btn-round ml-1" variant="primary">View Details</Button>
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row className="third-row">
                                        <Col md="6" className="new-to-canada">
                                            <Card className="shadow">
                                                <CardImg src={pic1} />
                                                <CardBody>
                                                    <h5>New to Canada</h5>
                                                    <CardText>
                                                        If you’re a Canadian citizen, applying for a mortgage is a fairly simple process.
                                                    </CardText>
                                                    <Link to="/mortgage/new-to-Canada">
                                                        <Button className="btn-neutral btn-round ml-1" variant="primary">View Details</Button>
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="6" className="low-income-education-center">
                                            <Card className="shadow">
                                                <CardImg src={pic1} />
                                                <CardBody>
                                                    <h5>Low Income Education Center</h5>
                                                    <CardText>
                                                        We work with lenders that offer excellent mortgage options for low income or self-employed Canadian.
                                                    </CardText>
                                                    <Link to="/mortgage/low-income-education-centre">
                                                        <Button className="btn-neutral btn-round ml-1" variant="primary">View Details</Button>
                                                    </Link>
                                                </CardBody>
                                            </Card>
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