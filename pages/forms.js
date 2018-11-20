import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import { PageHeader, Row, Col, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap/lib'
import IframeResponsiveExamples from '../src/components/IframeResponsiveExamples'

export default class extends Page {
    render() {
        return (
            <Layout title="Forms | " pathname={this.props.pathname}>
                <PageHeader>
                    Forms
                </PageHeader>


                <section>

                    <h2>Fieldset</h2>

                    <p>In long forms, consider grouping inputs into fieldsets.</p>

                    <h3>Legend</h3>

                    <p>Label each fieldset with a legend.</p>

                    <ul>
                        <li>Case: Title Case (capitalize primary words)</li>
                    </ul>

                    <div className="example">
                        <Form horizontal>
                            <fieldset>
                                <legend>Fieldset Title</legend>
                            </fieldset>
                        </Form>
                    </div>

                </section>


                <section className="unapproved">

                    <h2>"Required" Message</h2>

                    <ul>
                        <li>Place above the field inputs in the same column as the field labels</li>
                        <li>Align: left</li>
                        <li>Font size is 85% relative to surrounding text *</li>
                        <li>Italicized *</li>
                        <li>Color is @brand-danger (#c9442a) *</li>
                        <li>Place a @brand-danger (#c9442a) colored asterisk before "required" message *</li>
                    </ul>

                    <p className="small">* Automatic when .required-message class is added to parent element, e.g. <code>&lt;div class="required-message"&gt;Required&lt;/div&gt;</code></p>

                    <div className="example">
                        <Form horizontal>
                            <FormGroup>
                                <Col sm={4} smOffset={2}>
                                    <div className="required-message">Required</div>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formBasicText">
                                <Col componentClass={ControlLabel} sm={2} className="required">
                                    Required input
                                </Col>
                                <Col sm={4}>
                                    <FormControl type="text" placeholder="Input field placeholder text"/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                </section>


                <section>
                    <h2>Labels</h2>

                    <ul>
                        <li>Case: Title Case (capitalize primary words)</li>
                    </ul>

                    <article className="unapproved">
                        <h3>"Required" Inputs</h3>

                        <ul>
                            <li>Place a @brand-danger (#c9442a) colored asterisk (*) before "required" field labels *</li>
                        </ul>

                        <p className="small">* Automatic when .required class is added to a label, e.g. <code>&lt;label class="required"&gt;</code></p>

                        <Row>

                            <Col sm={6}>

                                <h3>Desktop/Tablet Widths</h3>
                                <ul>
                                    <li>Place to the left of respective input field *</li>
                                    <li>Align right *</li>
                                    <li>Place "Required" asterisk before the field label and separated with a space *</li>
                                </ul>

                                <p className="small">* Automatic when the label element is used, e.g. <code>&lt;label&gt;Input Label&lt;/label&gt;</code></p>

                            </Col>

                            <Col sm={6}>

                                <h3>Mobile Widths</h3>
                                <ul>
                                    <li>Place above the respective input field *</li>
                                    <li>Align left *</li>
                                    <li>Place "Required" asterisk after the field label and separated with a space *</li>
                                </ul>

                            </Col>

                        </Row>

                        <div className="example">
                            <Form horizontal>
                                <FormGroup controlId="formBasicText" >
                                    <Col componentClass={ControlLabel} sm={2} className="required">
                                        Input Label
                                    </Col>
                                    <Col sm={4}>
                                        <FormControl type="text" placeholder="Input field placeholder text" />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>

                    </article>

                </section>


                <section>

                    <h2>Select Options</h2>

                    <ul>
                        <li title="Defined 11/12/2018">Case: Title Case</li>
                        <li title="Defined 11/12/2018">When a default option is not appropriate, start the options list with "Select One" (note capital "O")</li>
                        <li title="Defined 11/12/2018">If the selection is optional, follow the "Select One" text with " (optional)" (lower case)</li>
                        <li title="Defined 11/13/2018">Sort options alphabetically</li>
                    </ul>

                    <div className="example" title="Defined 11/12/2018">
                        <Form horizontal>
                            <FormGroup controlId="formControlsSelect">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Input Label
                                </Col>
                                <Col sm={4}>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">Select One</option>
                                        <option value="opt2">Option One</option>
                                        <option value="opt3">Option Two</option>
                                        <option value="opt4">Option Three</option>
                                        <option value="opt5">Option Four</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                </section>


                <section>

                    <h2>Placeholder Text</h2>

                    <ul>
                        <li title="Defined 11/12/2018">Case: Sentence case</li>
                    </ul>

                    <div className="example">
                        <Form horizontal>
                            <FormGroup controlId="formBasicText" >
                                <Col componentClass={ControlLabel} sm={2}>
                                    Input label
                                </Col>
                                <Col sm={4}>
                                    <FormControl type="text" placeholder="Placeholder text" />
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                </section>


                <section className="unapproved">
                    <h2>Helper Text (e.g. input requirements)</h2>

                    <ul>
                        <li>Place immediately below the relevant input field</li>
                        <li>Do not end with a period unless it contains two or more sentences</li>
                    </ul>

                    <div className="example">
                        <Form horizontal>
                            <FormGroup controlId="formBasicText" >
                                <Col componentClass={ControlLabel} sm={2} className="required">
                                    Input label
                                </Col>
                                <Col sm={4}>
                                    <FormControl type="text" placeholder="Input field placeholder text" />
                                    <HelpBlock>Help Block - Input must be at least 10 characters</HelpBlock>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                </section>


                <IframeResponsiveExamples url="/form-example" desktopHeight={900} mobileHeight={1100} />


            </Layout>
        )
    }
}