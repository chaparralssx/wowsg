import React from 'react'
import Layout from '../src/components/Layout'
import FindButtonPanel from '../src/components/FindButtonsPanel'
import { PageHeader, Grid, Row, Col, Panel, Button, Popover, OverlayTrigger } from 'react-bootstrap/lib'

const popoverRight = (
  <Popover id="popover-provider" title="provider">
    A medical professional who performs routine medical exams and other uncomplicated medical services.
  </Popover>
);

export default () => (
    <Layout title="networkhealth.com | " className="networkhealth-home">
        <Row>
            <Col sm={8}>
                <Panel>
                    <h1>Meet Network Health</h1>
                    <p>As your local health insurance <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}><a className="jargon">provider</a></OverlayTrigger>, we understand that insurance and confusion can go hand-in-hand. Here at Network Health, we speak your language, using a jargon-free approach to help you find the right coverage.</p>
                    <a href="" className="btn btn-primary">Let us show you how we're different</a>
                </Panel>
                <Panel>
                    <Row>
                        <Col md={6} className="employer-plans-links">
                            <h2>Employer Plans</h2>
                            <Button>
                                <div>Assure Level-Funded</div>
                                <div>5-100 Employees</div>
                            </Button>
                            <Button>
                                <div>Plans for</div>
                                <div>51+ Employees</div>
                            </Button>
                            <Button>
                                <div>Plans for</div>
                                <div>2-50 Employees</div>
                            </Button>
                        </Col>
                        <Col md={6} className="wellness-programs-links">
                            <h2>Wellness Programs</h2>
                            <Button bsStyle="info">
                                <div>Empower</div>
                                <div>For Assure Plan Participants</div>
                            </Button>
                            <Button bsStyle="info">
                                <div>Millennium</div>
                                <div>For Large Employers</div>
                            </Button>
                            <Button bsStyle="info">
                                <div>Strive</div>
                                <div>For Small Employers</div>
                            </Button>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Individual and Medicare Plans">
                    <Row>
                        <Col md={6} className="individual-plans-links">
                            <Button bsStyle="primary" bsSize="large">
                                <div>Individual and Family Plans</div>
                            </Button>
                        </Col>
                        <Col md={6} className="medicare-plans-links">
                            <Button bsStyle="success" bsSize="large">
                                <div>Medicare Plans</div>
                            </Button>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Sign In to Your Network Health Account" className="portal-links">
                    <Row>
                        <Col md={4}>
                            <Button bsStyle="primary">
                                <div>Member Sign In</div>
                            </Button>
                        </Col>
                        <Col md={4}>
                            <Button>
                                <div>Provider Sign In</div>
                            </Button>
                        </Col>
                        <Col md={4}>
                            <Button>
                                <div>Agent Sign In</div>
                            </Button>
                        </Col>
                    </Row>
                </Panel>
            </Col>
            <Col sm={4}>
                <FindButtonPanel/>
                <Panel header="Read the Latest" bsStyle="primary">
                    Meet Jan
                </Panel>
            </Col>
        </Row>

        <Row>
            <Col sm={12}>
                <Panel>
                    <h2>Insurance Translator</h2>
                    <p>What's a formulary? What's coinsurance? Use our interactive glossary to translate health insurance jargon into plain language.</p>
                    <Button>Translate Jargon</Button>
                </Panel>
            </Col>
        </Row>
    </Layout>
)