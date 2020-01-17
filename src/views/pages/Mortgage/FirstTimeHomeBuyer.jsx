import React from 'react';
import classnames from "classnames";
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Input,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

export default class FirstTimeHomeBuyer extends React.Component {

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
                    <h1 className="title">First Time Home Buyer</h1>
                </div>
                <section className="section">
                    <Container>
                        <div>
                            <section className="section section-lg py-3">
                                <Container>
                                    <Row className="second-row">
                                        <Col lg="6" className="pr-4 mb-5 apply-info">
                                            <h2 className="mt-5 mb-3">First Time Home Buyer</h2>
                                            <p className="list-group-content">
                                                There are many benefits and incentives that first-time home buyer can get.
                                                Take a look for the following point if you’re looking to take the big leap of
                                                becoming a first-time homebuyer:
                                            </p>
                                            <ol className="list-group-content">
                                                <li>First-Time Home Buyer’s Tax Credit—This program amounts to a $750 rebate for
                                                    first-time buyers and is meant to help defray housing costs such as legal and inspection fees.
                                                    To receive the credit, you must claim it on your tax return.
                                                </li>
                                                <li> First-Time Home Buyer Incentive — The First-Time Home Buyer Incentive can help you purchase your first home.
                                                     This incentive aims to help first-time homebuyers without adding to their financial burdens.
                                             There are no additional monthly payments.</li>
                                                <li>RRSP Plan—the federal government allows you to borrow up to $25,000 from your RRSP to be used towards a down payment
                                                    on your first home. The borrowed amount must eventually be repaid back into the RRSP.
                                            If not, tax penalties will apply.</li>
                                                <li>Land Transfer Tax Rebate— only available to residents of Ontario, British Columbia and Prince Edward Island.
                                            For Toronto residents, First-time buyers can get up to $3,725 back for Land Transfer Tax Rebate.</li>
                                            </ol>
                                            <p className="list-group-content h5">
                                                The most suitable plan:
                                            </p>
                                            <p className="list-group-content">
                                                Want to <strong>GET THE PROFESSIONAL ADVICE</strong> on the most suitable mortgage plan, incentive,
                                                and benefits for your first time home purchase?
                                            </p>
                                            <strong>
                                                Contact Monest if you are buying a home for first time and hear our professional advice!
                                            </strong>
                                        </Col>

                                        <Col lg="6" className="pl-4 apply-form">
                                            <Card className="profile-page">
                                                <CardBody className="p-lg-5">
                                                    <h5 className="mb-4">First Time Home Buyer Contact form</h5>
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
                                                                <option>get an advice on suitable mortgage plan</option>
                                                                <option>knowing more details for First-buyer Incentive</option>
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