/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Home from "views/pages/Home.jsx";

import Mortgage from "views/pages/Mortgage/Mortgage.jsx"
import FirstTimeHomeBuyer from "views/pages/Mortgage/FirstTimeHomeBuyer.jsx"
import InvestmentProperties from "views/pages/Mortgage/InvestmentProperties.jsx"
import NewToCanada from "views/pages/Mortgage/NewToCanada.jsx"
import LowIncomeEducationCentre from "views/pages/Mortgage/LowIncomeEducationCentre.jsx"

import Calculator from "views/pages/Calculator/Calculator.jsx"
import MortgageAffordabilityCalculator from "views/pages/Calculator/MortgageAffordabilityCalculator.jsx"
import MortgagePaymentCalculator from "views/pages/Calculator/MortgagePaymentCalculator.jsx"

import About from "views/pages/About/About.jsx"
import OurStory from "views/pages/About/OurStory.jsx"
import Agents from "views/pages/About/Agents.jsx"
import ReferralProgram from "views/pages/About/ReferralProgram.jsx"
import MortgageInsight from "views/pages/About/MortgageInsight.jsx"
import MortgageArticle from "views/pages/About/MortgageArticle.jsx"
import MortgageNews from "views/pages/About/MortgageNews.jsx"

import Contact from "views/pages/Contact/Contact.jsx"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* The component has access to the props coming through the Route. */}
        <Route path="/" exact render={props => <Home {...props} />} />

        <Route path="/mortgage" exact render={props => <Mortgage {...props} />} />
        <Route path="/mortgage/first-time-home-buyer" exact render={props => <FirstTimeHomeBuyer {...props} />} />
        <Route path="/mortgage/investment-properties" exact render={props => <InvestmentProperties {...props} />} />
        <Route path="/mortgage/new-to-Canada" exact render={props => <NewToCanada {...props} />} />
        <Route path="/mortgage/low-income-education-centre" exact render={props => <LowIncomeEducationCentre {...props} />} />

        <Route path="/calculator" exact render={props => <Calculator {...props} />} />
        <Route path="/calculator/mortgage-affordability-calculator" exact render={props => <MortgageAffordabilityCalculator {...props} />} />
        <Route path="/calculator/mortgage-payment-calculator" exact render={props => <MortgagePaymentCalculator {...props} />} />

        <Route path="/about" exact render={props => <About {...props} />} />
        <Route path="/about/our-story" exact render={props => <OurStory {...props} />} />
        <Route path="/about/agent" exact render={props => <Agents {...props} />} />
        <Route path="/about/referral-program" exact render={props => <ReferralProgram {...props} />} />
        <Route path="/about/mortgage-insight" exact render={props => <MortgageInsight {...props} />} />
        <Route path="/about/mortgage-article" exact render={props => <MortgageArticle {...props} />} />
        <Route path="/about/mortgage-news" exact render={props => <MortgageNews {...props} />} />

        <Route path="/contact" exact render={props => <Contact {...props} />} />
        
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
