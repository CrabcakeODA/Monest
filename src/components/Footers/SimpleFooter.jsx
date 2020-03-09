import React from "react";
import { Link } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import {
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "scss/SimpleFooter.scss";

class SimpleFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
     
    })
  }

  render() {
    const { t } = this.props;

    return (
      <>
        <footer className="footer">
        {/* <ScrollToTop /> */}
          <Container className="footerContainer">
            {/* sitmap list */}
            <Row className=" row-grid align-items-center mb-5 top">
              <Col lg="9" className="sitemap">
                <Row>
                  <Col md="2" className="sitemap-list">
                    <ListGroup className="monest-footer footer-list">
                      <ListGroupItem className="list-title"><Link to="/">{t('Monest')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/about/our-story">{t('Our Story')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/about/agent">{t('Agents')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/contact">{t('Contact')}</Link></ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col md="4" className="sitemap-list">
                    <ListGroup className="mortgage-footer footer-list">
                      <ListGroupItem className="list-title"><Link to="/mortgage">{t('Mortgage')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/mortgage/first-time-home-buyer">{t('First-Time Home Buyer')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/mortgage/investment-properties">{t('Investment Properties')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/mortgage/new-to-Canada">{t('New to Canada')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/mortgage/low-income-education-centre">{t('Low income Education Centre')}</Link></ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col md="4" className="sitemap-list">
                    <ListGroup className="calculator-footer footer-list">
                      <ListGroupItem className="list-title"><Link to="/calculator">{t('Calculator')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/calculator/mortgage-affordability-calculator">{t('Mortgage Affordability Calculator')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/calculator/mortgage-payment-calculator">{t('Mortgage Payment Calculator')}</Link></ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col md="2" className="sitemap-list">
                    <ListGroup className="about-footer footer-list">
                      <ListGroupItem className="list-title"><Link to="/about">{t('About')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/about">{t('Referral Program')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/about/mortgage-insight">{t('Mortgage Insight')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/about/mortgage-article">{t('Mortgage Article')}</Link></ListGroupItem>
                      <ListGroupItem><Link to="/about/mortgage-news">{t('Mortgage News')}</Link></ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </Col>

              {/* media */}
              <Col className="text-lg-center btn-wrapper media-container" lg="3">
                <div className="media-total">
                  <div className="media-part">
                    <Button
                      className=" btn-neutral btn-icon-only btn-round"
                      color="instagram"
                      href="https://www.instagram.com/monest_mortgage/"
                      id="tooltip126536702"
                      size="lg"
                      target="_blank"
                    >
                      <i className=" fa fa-instagram" />
                    </Button>
                    <Button
                      className=" btn-neutral btn-icon-only btn-round ml-1"
                      color="facebook"
                      href="https://www.facebook.com/MonestMortgage/?modal=admin_todo_tour"
                      id="tooltip383967593"
                      size="lg"
                      target="_blank"
                    >
                      <i className=" fa fa-facebook-square" />
                    </Button>
                    <Button
                      className=" btn-neutral btn-icon-only btn-round ml-1 linkedin-icon"
                      href="#"
                      id="tooltip568564532"
                      size="lg"
                      target="_blank"
                    >
                      <i className=" fa fa-linkedin" />
                    </Button>
                  </div>
                  <div className="media-part media-bottom">
                    <Button
                      className=" btn-neutral btn-icon-only btn-round ml-1 youtube-icon"
                      href="#"
                      id="tooltip626177562"
                      size="lg"
                      target="_blank"
                    >
                      <i className=" fa fa-youtube-play" />
                    </Button>
                    <Button
                      className=" btn-neutral btn-icon-only btn-round ml-1 pinterest-icon"
                      href="#"
                      id="tooltip626177562"
                      size="lg"
                      target="_blank"
                    >
                      <i className=" fa fa-pinterest" />
                    </Button>
                  </div>
                </div>

                {/* call number */}
                <div className="call">Call: 416-855-4565 </div>
              </Col>
            </Row>
            <hr />
            
            {/* copyright */}
            <Row className=" align-items-center justify-content-md-between">
              <Col>
                <div className=" copyright text-center">
                  © {new Date().getFullYear()}{" "}
                Monest - maintained by Excalibur resume & culture service
                </div>
              </Col>   
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default withNamespaces()(SimpleFooter);
