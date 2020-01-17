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

export default class NewToCanada extends React.Component {
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
                    <h1 className="title">New to Canada</h1>
                </div>
                <section className="section">
                    <Container>
                        <div>
                            <section className="section section-lg py-3">
                                <Container>
                                    <Row className="second-row">
                                        <Col lg="6" className="pr-4 mb-5 apply-info">
                                            <h2 className="mt-5 mb-3">New To Canada</h2>
                                            <p className="list-group-content">
                                                Newcomers to Canada are an important and growing segment of Canada’s population, creating new market opportunities. CMHC-insured financing is available to borrowers with permanent and non-permanent residency status. Most Canadians don’t pay for the full cost of their home at once. Generally, the money required to buy a home comes from two main sources- a mortgage, and a mortgage down payment
                                            </p>
                                            <h4 className="mt-5">New To Canada ™ Program</h4>
                                            <p className="list-group-content">
                                                Qualified homebuyers who have immigrated or relocated to Canada within the last 5 years are eligible under Monest’s
                                                New to Canada program to purchase a property with as little as a 5% down payment.
                                                Contact Monest (link to email mailto:) if you’re interested to know more about this program.
                                            </p>
                                            <h4 className="mt-5">New Immigrant Mortgage 35 Program</h4>
                                            <p className="list-group-content">
                                                New immigrant with or without the proof of income may both be eligible for New immigrant Mortgage 35 Program. Which 35 means 35% of minimum down payment from one’s own resource.  Contact Monest (link to email mailto:) if you’re interested to learn more
                                            </p>
                                        </Col>

                                        <Col lg="6" className="pl-4 apply-form">
                                            <Card className="profile-page">
                                                <CardBody className="p-lg-5">
                                                    <h4 className="mb-4">New Immigrant Contact Form</h4>
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
                                                                <option>Learning what would be the most suitable mortgage plan as a newcomer</option>
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