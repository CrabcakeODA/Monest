import React, {useState} from 'react';
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
    Col,
    table,
    Table,
   PopoverBody,
    Popover,
   PopoverHeader

  } from "reactstrap";
import { reactI18nextModule } from 'react-i18next';

  export default class MortgageAffordabilityCalcultor extends React.Component{

    render(){
        return(
            <div className = "mortgage-affordability-calculator">
                <div className = "header-and-feature">
                    <p className = "h1">Mortgage Affordability Calcultor</p>
                </div>
                <div className = "main-container">
                    <Row className = "first-row">
                        <Col className = "border-bottom"><p className = "h2">Mortgage Affordability Calcultor</p></Col>
                    </Row>
                    <Row className = "second-row">
                        <Col>
                            <p className = "calculator-content">
                            When browsing real estate listings for a new home, the first step is to figure out how much mortgage you can afford.
                            Affordability is based on the household income of the applicants purchasing the house, 
                            the personal monthly expenses of those applicants (car payments, credit expenses, etc.), 
                            and the expenses associated with owning a home (property taxes, condo fees, and heating costs). 
                            The calculator below will show you the maximum purchase price that you can qualify for.
                            </p>
                        </Col>
                    </Row>
                    <Row className = "third-row">
                        <div className = "mortgage-calculator">
                            <script type="text/javascript" src="https://www.ratehub.ca/assets/js/widget-loader.js"></script>
                                
                                    <div>
                                        <Table className = "sub-content" responsive>
                                            <thead className = "thead-dark">
                                                <tr>
                                                    <th colSpan = "3">Annual Income</th>
                                                    <th colSpan = "3">Living Costs</th>
                                                    <th colSpan = "1">Estimate</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label for = "annual-income">Annual Income: </label>
                                                        <br></br>
                                                        <span className = "clarification">Before Tax</span>
                                                    </td>

                                                    <td id = "annual-income-filed">
                                                        <input className = ".input-group" type = "text" class = "text" id = "annual-income" tabindex = "1"></input>
                                                    </td>

                                                    <td>
                                                        <Button className="btn-sm btn-icon-label" color="secondary" id= "PopoverClick" type = "button">
                                                            Tips
                                                        </Button>
                                                        <Popover placement = "top" target = "PopoverClick">
                                                            <PopoverHeader>Click Trigger</PopoverHeader>
                                                            <PopoverBody>Clicking on</PopoverBody>
                                                        </Popover>
                                                    </td>
                                                    <td>
                                                        <label for = "prop_tax">Property Tax: </label>                   
                                                    </td>
                                                    <td>
                                                        <input type = "text" className = "text" id = "prop_tax" tabindex = "6"></input>
                                                    </td>
                                                    <td>
                                                        <span className = "select">
                                                            <Input className = "selector" type = "select" name = "select">
                                                                <option selected value = "month">/mo</option>
                                                                <option value = "year">/yr</option>
                                                            </Input>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className = "check-box">
                                                            <input type = "checkbox"></input>
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <label for = "co-applicant-income">Co-Applicant Income: </label>
                                                        <br></br>
                                                        <span className = "clarification">Before Tax</span>
                                                    </td>

                                                    <td id = "co-applicant-income-filed" colSpan = "1">
                                                        <input type = "text" class = "text" id = "co-applicant-income-filed" tabindex = "1"></input>
                                                    </td>

                                                    <td>
                                                        <Button className="btn-sm btn-icon-label" color="secondary" id= "PopoverClick" type = "button">
                                                            Tips
                                                        </Button>
                                                        <Popover placement = "top" target = "PopoverClick">
                                                            <PopoverHeader>Click Trigger</PopoverHeader>
                                                            <PopoverBody>Clicking on</PopoverBody>
                                                        </Popover>
                                                    </td>
                                                    <td>
                                                        <label for = "condo-fees">Condo Fees: </label>                   
                                                    </td>
                                                    <td>
                                                        <input type = "text" className = "text" id = "condo-fees" tabindex = "6"></input>
                                                    </td>
                                                    <td>
                                                        <span className = "select">
                                                            <Input className = "selector" type = "select" name = "select">
                                                                <option selected value = "month">/mo</option>
                                                                <option value = "year">/yr</option>
                                                            </Input>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className = "check-box">
                                                            <input type = "checkbox"></input>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td colSpan = "1"></td>
                                                    <td></td>
                                                    <td>
                                                        <label for = "heating-costs">Heating Costs: </label>                   
                                                    </td>
                                                    <td>
                                                        <input type = "text" className = "text" id = "heating-costs" tabindex = "6"></input>
                                                    </td>
                                                    <td>
                                                        <span className = "select">
                                                            <Input className = "selector" type = "select" name = "select">
                                                                <option selected value = "month">/mo</option>
                                                                <option value = "year">/yr</option>
                                                            </Input>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className = "check-box">
                                                            <input type = "checkbox"></input>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className = "debt-payments" colSpan = "100%">Debt Payments</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label for = "credit-card">Credit Card: </label>
                                                        <br></br>
                                                    </td>

                                                    <td id = "credit-card-filed" colSpan = "1">
                                                        <input type = "text" class = "text" id = "annual-income" tabindex = "1"></input>
                                                    </td>

                                                    <td>
                                                        <Button className="btn-sm btn-icon-label" color="secondary" id= "PopoverClick" type = "button">
                                                            Tips
                                                        </Button>
                                                        <Popover placement = "top" target = "PopoverClick">
                                                            <PopoverHeader>Click Trigger</PopoverHeader>
                                                            <PopoverBody>Clicking on</PopoverBody>
                                                        </Popover>
                                                    </td>
                                                    <td>
                                                        <span className = "select">
                                                            <Input className = "selector" type = "select" name = "select">
                                                                <option selected value = "month">/mo</option>
                                                                <option value = "year">/yr</option>
                                                            </Input>
                                                        </span>
                                                    </td>
                                                    <td colSpan = "5" rowSpan = "3">
                                                        <button className = "affordability">How much can I afford</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label for = "car-payment">Car Payment: </label>
                                                        <br></br>
                                                        
                                                    </td>

                                                    <td id = "car-payment-filed" colSpan = "1">
                                                        <input type = "text" class = "text" id = "car-payment-filed" tabindex = "1"></input>
                                                    </td>

                                                    <td>
                                                        <Button className="btn-sm btn-icon-label" color="secondary" id= "PopoverClick" type = "button">
                                                            Tips
                                                        </Button>
                                                        <Popover placement = "top" target = "PopoverClick">
                                                            <PopoverHeader>Click Trigger</PopoverHeader>
                                                            <PopoverBody>Clicking on</PopoverBody>
                                                        </Popover>
                                                    </td>
                                                    <td>
                                                        <span className = "select">
                                                            <Input className = "selector" type = "select" name = "select">
                                                                <option selected value = "month">/mo</option>
                                                                <option value = "year">/yr</option>
                                                            </Input>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label for = "other-loan">Other Loan: </label>
                                                        <br></br>
                                                    </td>

                                                    <td id = "other-loan-filed" colSpan = "1">
                                                        <input type = "text" class = "text" id = "other-loan-filed" tabindex = "1"></input>
                                                    </td>

                                                    <td>
                                                        <Button className="btn-sm btn-icon-label" color="secondary" id= "PopoverClick" type = "button">
                                                            Tips
                                                        </Button>
                                                        <Popover placement = "top" target = "PopoverClick">
                                                            <PopoverHeader>Click Trigger</PopoverHeader>
                                                            <PopoverBody>Clicking on</PopoverBody>
                                                        </Popover>
                                                    </td>
                                                    <td>
                                                        <span className = "select">
                                                            <Input className = "selector" type = "select" name = "select">
                                                                <option selected value = "month">/mo</option>
                                                                <option value = "year">/yr</option>
                                                            </Input>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </thead>
                                        </Table>
                                    </div>
  
                            </div>
                        </Row>
                    </div>
            </div>
        )

    }


  }