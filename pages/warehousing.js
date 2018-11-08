import React from 'react';
import Layout from '../src/components/Layout';
import Page from '../src/components/Page';
import { PageHeader, Row, Col, Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap/lib';

export default class extends Page {
    getInitialState() {
      return {
        value: ''
      };
    }
  
    getValidationState() {
      const length = this.state.value.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }

    render() {
        return (
            <Layout title='Warehousing | ' pathname={this.props.pathname} >

                <Row>
                    <Col sm={9}>

                <PageHeader>
                    Warehousing &amp; Distribution
                </PageHeader>

                <h2>Maximize your distribution efficiency</h2>

                <p>There’s nothing simple about a company managing its own warehouse. The task comes with high fixed costs in the form of Material Handling Equipment (MHE) and building expenses. Variable costs such as extra personnel drive expenditures even higher.</p>
                <p>And if yours is a <a href="food_product_safety">food product</a>, it’s likely that warehouse staff lacks expertise in the storage and handling requirements of such items.</p>
                <p>Factor in seasonal needs, a lack of internal resources to support warehousing , and a less-than-ideal internal location, and what seemed to be an easy task to complete in-house, is far more complicated and costly.</p>
                <p>WOW delivers a <strong>true solution</strong> that eliminates those headaches and makes distribution much more cost effective.</p>
        
            <h3>The WOW Solution</h3>
            <ul>
                <li>
                    <strong>Reduce expenses.</strong> By eliminating your high fixed and variable costs of distribution, WOW will help free up dollars for your company to spend on more strategic initiatives that <strong>drive profitability</strong>.
                </li>
                <li>
                    <strong>Ultimate flexibility.</strong> We give you the flexibility to <strong>pay for what you use</strong> – a huge advantage for customers with seasonal space requirements.
                </li>
                <li>
                    <strong>Get results.</strong> WOW will establish <strong>metrics</strong> and <strong>key performance indicators</strong>. This approach enables you to better monitor logistics performance.
                </li>
                <li>
                    <strong>Superior Service.</strong> WOW’s Customer Service Portal gives you <strong>24/7 access</strong> to the information you need, including invoices, release orders, ownership transfers, and trailer inspection information.
                </li>
            </ul>

            <h3>The WOW Difference</h3>
            <ul>
                <li>
                    <strong>Food-grade experts. </strong>Our expertise in storing and handling food-grade products is unparalleled. That’s why we are the <strong>only 3PL</strong> in the U.S. that is ASI audited at the <strong>food processor level </strong>and consistently rated above<strong> 90 percent</strong>.
                </li>
                <li>
                    <strong>Designed efficiency.</strong> WOW will leverage <strong>network design</strong> consultants to perform analytics that ensure an <strong>optimal location</strong> and transportation services.
                </li>
                <li>
                    <strong>Operational savings.</strong> Our in-house engineers are <strong>experts</strong> in tweaking all elements of the facility to drive <strong>maximum efficiency</strong> of warehouse operations
                </li>
            </ul>
                    </Col>
                    <Col sm={3}>

                    <h3>Request More Information</h3>

                    <Form horizontal>
                    <FormGroup controlId="contactName">
                      <Col componentClass={ControlLabel} sm={2}>
                        Name
                      </Col>
                      <Col sm={10}>
                        <FormControl type="text" placeholder="Your name" />
                      </Col>
                    </FormGroup>
                    
                    <FormGroup controlId="companyNamey">
                      <Col componentClass={ControlLabel} sm={2}>
                        Company
                      </Col>
                      <Col sm={10}>
                        <FormControl type="text" placeholder="Your company" />
                      </Col>
                    </FormGroup>
                    
                                        <FormGroup controlId="contactEmail">
                                          <Col componentClass={ControlLabel} sm={2}>
                                            Email
                                          </Col>
                                          <Col sm={10}>
                                            <FormControl type="email" placeholder="Your email" />
                                          </Col>
                                        </FormGroup>

                    <FormGroup controlId="verifyEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        Verify Email
                      </Col>
                      <Col sm={10}>
                        <FormControl type="email" placeholder="Your email" />
                      </Col>
                    </FormGroup>
                
                    <FormGroup controlId="contactNotes">
                      <Col componentClass={ControlLabel} sm={2}>
                        Notes
                      </Col>
                      <Col sm={10}>
                      <FormControl componentClass="textarea" placeholder="Comments" />
                      </Col>
                    </FormGroup>
                    
                        <FormGroup controlId="contactNotes">
                          <Col componentClass={ControlLabel} sm={2}>
                            Category
                          </Col>
                          <Col sm={10}>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="Warehousing">Warehousing</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Commodity Purchasing">Commodity Purchasing</option>
                                <option value="Build-to-Suit">Build-to-Suit</option>
                                <option value="Contract Operations">Contract Operations</option>
                            </FormControl>
                      </Col>
                    </FormGroup>
                
                    <FormGroup>
                      <Col smOffset={2} sm={10}>
                        <Button type="submit">
                          Submit
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>

                  
      <ul>
          <li><a href="">View Brochures</a>
            <ul>
          <li><a href="">Warehousing</a></li>
          <li><a href="">Contract Operations</a></li>
          <li><a href="">WOW Technology</a></li>
                </ul>
          </li>
          <li><a href="">Food Product Safety</a></li>
          <li><a href="">Vacuum Sealing</a></li>
          <li><a href="">Technology</a></li>
          <li><a href="">Custom Accessorial Services</a></li>
    </ul>

    <div className="contactInfo">
        <h4>Contact WOW</h4>
        <tel>(800) 236-3565</tel>
        <ul>
        <li><a href="">Sales</a></li>
            <li><a href="">Transportation Services</a></li>
            <li><a href="">Human Resources</a></li>
            <li><a href="">Marketing</a></li>
            </ul>
        </div>

                    </Col>
                </Row>
            </Layout>
        )
    }
}