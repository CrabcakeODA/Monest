import React from 'react';
import classnames from "classnames";
import {
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

export default class InvestmentProperties extends React.Component {

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
                    <h1 className="title">Investment Properties</h1>
                </div>
                <section className="section">
                    <Container>
                        <div>
                            <section className="section section-lg py-3">
                                <Container>
                                    <Row className="second-row">
                                        <Col lg="6" className="pr-4 mb-5 apply-info">
                                            <h2 className="mt-5 mb-3">Investment Properties</h2>
                                            <p className="list-group-content">
                                                You may already own a primary residence and are now considering buying a home for investment purposes.
                                                Mortgage rates on investment properties (owner occupied) are similar to those for primary mortgages.
                                                But some lenders do not offer it to investment property mortgages at all.
                                                Our experienced team can provide you professional advice on what’s the best mortgage plan for buying a
                                                investment property.
                                            </p>
                                            <p className="list-group-content">Want to find out what the best rate and advice that you can get for investment property?</p>
                                            <strong>Contact Monest if you ‘re interested!</strong>
                                        </Col>

                                        <Col lg="6" className="pl-4 apply-form">
                                            <Card className="profile-page">
                                                <CardBody className="p-lg-5">
                                                    <h5 className="mb-4">Investment Property Contact Form</h5>
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
                                    </Row>
                                </Container>
                            </section>
                        </div>
                    </Container>
                </section>
            </div >
        )
    }
} 