import React from 'react';
import {
    Container,
    Row,
    Table,
} from "reactstrap";
import "scss/MortgagePaymentCalculator.scss";

export default class MortgagePaymentCalculator extends React.Component {
    render() {
        return (
            <div className="Mortgage">
                <div className="titleContainer">
                    <h1 className="title">Mortgage Payment Calcultor</h1>
                </div>
                <div className="section">
                    <Container>
                        <div>
                            <h2 className="mb-3 mb-0">Mortgage Payment Calcultor</h2>
                            <p>
                                Our mortgage payment calculator allows you to enter enter the purchase price, down payment amount, amortization period and mortgage rate to determine your monthly payment and the corresponding amortization schedule. This enables you to try different down payment, mortgage rate, and amortization period scenarios to see how they will affect your monthly mortgage payment amount. Our calculator also shows you what the land transfer tax will be, and approximately how much cash you’ll need htmlFor closing costs. You can also use the calculator to estimate your total monthly expenses, see what your payments will be if mortgage rates go up, and show what your outstanding balance will be over time.
                            </p>
                            <section className="section section-lg py-3">
                                <Container>
                                    <Row className="third-row">
                                        <div className="mortgage-calculator">
                                            <script type="text/javascript" src="https://www.ratehub.ca/assets/js/widget-loader.js"></script>
                                            <div>
                                                <Table className="sub-content" responsive>
                                                    <thead>
                                                        <h5 className='ml-3 mb-3'>
                                                            Monthly Mortgage Payments
                                                        </h5>
                                                        <tr>
                                                            <td>
                                                                <label htmlFor="condo-fees">Total Amount: </label>
                                                            </td>
                                                            <td>
                                                                <input type="text" className="text" id="condo-fees"></input>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <label htmlFor="condo-fees">Down Payment:</label>
                                                            </td>
                                                            <td>
                                                                <input type="text" className="text" id="condo-fees"></input>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <label htmlFor="condo-fees">Interest Rate: </label>
                                                            </td>
                                                            <td>
                                                                <input type="text" className="text" id="condo-fees"></input>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <label htmlFor="condo-fees">Mortgage Period: </label>
                                                            </td>
                                                            <td>
                                                                <input type="text" className="text" id="condo-fees"></input>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="12" rowSpan="12">
                                                                <button className="affordability">Calculate Mortgage</button>
                                                            </td>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                            </div>
                                        </div>
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