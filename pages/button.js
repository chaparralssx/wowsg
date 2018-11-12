import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import { PageHeader, ButtonToolbar, Button, Alert, Row, Col } from 'react-bootstrap/lib'
import IframeResponsiveExamples from '../src/components/IframeResponsiveExamples'

export default class extends Page {
    render() {
        return (
            <Layout title="Button | " pathname={this.props.pathname}>
                <PageHeader>
                    Button
                </PageHeader>


                <section>

                    <h2>Standard Buttons</h2>

                    <article className="unapproved">
                        <Row>
                            <Col sm={6}>
                                <h3>Default State</h3>
                                <ul>
                                    <li>Bottom margin: 0px</li>
                                    <li>Font family: Arial</li>
                                    <li>Font weight: bold</li>
                                    <li>Text align: left</li>
                                    <li>Vertical align: middle</li>
                                    <li>Cursor: pointer</li>
                                    <li>Border: none</li>
                                    <li>Vertical padding: @padding-base-vertical (8px)</li>
                                    <li>Horizontal padding: @padding-base-horizontal (15px)</li>
                                    <li>Boder radius: @btn-border-radius-base (4px)</li>
                                    <li>Line height: 1.4 (20/14)</li>
                                </ul>
                            </Col>
                            <Col sm={6}>
                                <h3>Hover State</h3>
                                <ul>
                                    <li>Background: darken 12%</li>
                                    <li>Border: darken 14%</li>
                                </ul>
                            </Col>
                        </Row>
                    </article>


                    <article>
                        <h3>Placement</h3>
                    </article>


                    <article>

                        <h3>Color</h3>

                        <p>Add the classes below to <code>&lt;button class="btn"&gt;</code>, <code>&lt;input class="btn"&gt;</code> and <code>&lt;a class="btn"&gt;</code> to color the buttons.</p>

                        <div className="example">
                            <ButtonToolbar>
                                <Button>(default)</Button>
                                <Button bsStyle="primary">btn-primary</Button>
                                <Button bsStyle="success">btn-success</Button>
                                <Button bsStyle="info">btn-info</Button>
                                <Button bsStyle="warning">btn-warning</Button>
                                <Button bsStyle="danger">btn-danger</Button>
                            </ButtonToolbar>
                        </div>

                    </article>



                    <article>

                        <h3>Size</h3>

                        <Row className="unapproved">
                            <Col sm={4}>
                                <h4>Extra Small</h4>
                                <ul>
                                    <li>Horizontal padding: @padding-xs-horizontal (1px)</li>
                                    <li>Vertical padding: @padding-xs-vertical (5px)</li>
                                    <li>Border: none</li>
                                    <li>Font size: @font-size-small (12px)<br /><small className="text-danger">This size may be too small for sites with minimum accessibility requirements.</small></li>
                                    <li>Line height: @line-height-small (1.5)</li>
                                    <li>Border radius: @btn-border-radius-small (3px)</li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <h4>Small</h4>
                                <ul>
                                    <li>Horizontal padding: @padding-small-horizontal (3px)</li>
                                    <li>Vertical padding: @padding-small-vertical (8px)</li>
                                    <li>Border: none</li>
                                    <li>Font size: @font-size-small (12px)<br /><small className="text-danger">This size may be too small for sites with minimum accessibility requirements.</small></li>
                                    <li>Line height: @line-height-small (1.5)</li>
                                    <li>Border radius: @btn-border-radius-small (3px)</li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <h4>Large</h4>
                                <ul>
                                    <li>Horizontal padding: @padding-large-horizontal (24px)</li>
                                    <li>Vertical padding: @padding-large-vertical (16px)</li>
                                    <li>Font size: @font-size-large (21px)</li>
                                    <li>Line height: @line-height-large (1.3)</li>
                                    <li>Border radius: @btn-border-radius-large (6px)</li>
                                </ul>
                            </Col>
                        </Row>

                        <p>Add the classes below to <code>&lt;button class="btn"&gt;</code>, <code>&lt;input class="btn"&gt;</code> and <code>&lt;a class="btn"&gt;</code> to resize the buttons.</p>

                        <div className="example">
                            <ButtonToolbar>
                                <Button bsSize="xsmall">btn-xs</Button>
                                <Button bsSize="small">btn-sm</Button>
                                <Button>(default)</Button>
                                <Button bsSize="large">btn-lg</Button>
                            </ButtonToolbar>
                        </div>

                    </article>



                    <article className="unapproved">

                        <h3>Width</h3>
                        <ul>
                            <li>Display: block</li>
                            <li>Width: 100%</li>
                        </ul>

                        <p>Add the <code>btn-block</code> class to <code>&lt;button class="btn"&gt;</code>, <code>&lt;input class="btn"&gt;</code> and <code>&lt;a class="btn"&gt;</code> to make the button fill its container.</p>

                        <IframeResponsiveExamples url="/btn-block-example" desktopHeight={100} mobileHeight={120} />

                    </article>



                    <h3>States</h3>

                    <h4>Active</h4>
                    <ul className="unapproved">
                        <li>Outline: none</li>
                        <li>Width: 100%</li>
                        <li>Box Shadow: inset, offset: 0 3px 5px, black 12.5% opacity</li>
                    </ul>
                    <p>Add the <code>active</code> class to <code>&lt;button class="btn"&gt;</code>, <code>&lt;input class="btn"&gt;</code> and <code>&lt;a class="btn"&gt;</code> to make the button appear selected/active.</p>
                    <div className="example">
                        <ButtonToolbar>
                            <Button active>(default) active</Button>
                            <Button active bsStyle="primary">btn-primary active</Button>
                            <Button active bsStyle="success">btn-success active</Button>
                            <Button active bsStyle="info">btn-info active</Button>
                            <Button active bsStyle="warning">btn-warning active</Button>
                            <Button active bsStyle="danger">btn-danger active</Button>
                        </ButtonToolbar>
                    </div>

                    <h4>Disabled</h4>
                    <p>Add the <code>disabled</code> class to <code>&lt;button class="btn"&gt;</code>, <code>&lt;input class="btn"&gt;</code> and <code>&lt;a class="btn"&gt;</code> to make the button appear disabled.</p>
                    <p>Disabled buttons inside a paragraph (<code>&lt;p&gt;</code>) behave differently:</p>
                    <ul>
                        <li><span className="nt"><code>&lt;a&gt;</code></span> doesn't support the
                                <code>disabled</code> attribute. Add the .disabled class to make it visually appear
                                disabled.
                            </li>
                        <li>Some future-friendly styles are included to disable all pointer-events on anchor
                                buttons. In browsers that support the property, you won’t see the disabled cursor at
                                all.
                            </li>
                        <li>Disabled buttons should include the <code>aria-disabled="true"</code> attribute to
                                indicate the state of the element to assistive technologies.
                            </li>
                    </ul>
                    <div className="example">
                        <ButtonToolbar>
                            <Button disabled>(default) disabled</Button>
                            <Button disabled bsStyle="primary">btn-primary disabled</Button>
                            <Button disabled bsStyle="success">btn-success disabled</Button>
                            <Button disabled bsStyle="info">btn-info disabled</Button>
                            <Button disabled bsStyle="warning">btn-warning disabled</Button>
                            <Button disabled bsStyle="danger">btn-danger disabled</Button>
                            <a href="#" className="btn btn-link disabled" role="button" aria-disabled="true">Text link</a>
                        </ButtonToolbar>
                    </div>

                </section>


                <section>
                    <h2>Modals</h2>

                    <h3>Confirmation</h3>
                    <ul>
                        <li>Display the primary (action) button first</li>
                        <li>Instead of "Yes" or "No", label the buttons with actions such as "Delete" and "Cancel"</li>
                        <li>If the action will delete or inactivate date, use the "btn-danger" class</li>
                        <li>Except when space is very limited, do not display an icon next to the button text</li>
                        <li>When space is very limited, display an appropriate icon without text (e.g. trash icon)</li>
                    </ul>
                    <div className="example">
                        <p>Are you sure you want to delete this record?</p>
                        <ButtonToolbar>
                            <Button bsStyle="danger">Delete</Button>
                            <Button bsStyle="default">Cancel</Button>
                        </ButtonToolbar>
                    </div>
                </section>


                <section>
                    <h2>Wording</h2>

                    <h3>Delete (not Remove, Trash)</h3>
                    <ul>
                        <li>Use "Delete" when a record will be deleted</li>
                        <li>When space is limited, use the trash icon (<span className="glyphicon glyphicon-trash" aria-hidden="true"></span>) insted of text
                            <pre>
                                &lt;span className="glyphicon glyphicon-trash" aria-hidden="true"&gt;&lt;/span&gt;
                            </pre>
                        </li>
                    </ul>

                    <h3>Edit (not Change, Modify)</h3>
                    <ul>
                        <li>Use "Edit" when a record will be modified</li>
                        <li>When space is limited, use the pencil icon (<span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>) insted of text
                            <pre>
                                &lt;span className="glyphicon glyphicon-pencil" aria-hidden="true"&gt;&lt;/span&gt;
                            </pre>
                        </li>
                    </ul>

                    <h3>New (not Add, More, Create)</h3>
                    <ul>
                        <li>Use "New" when a record will be created</li>
                        <li>When space is limited, use the plus icon (<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>) insted of text
                            <pre>
                                &lt;span className="glyphicon glyphicon-plus" aria-hidden="true"&gt;&lt;/span&gt;
                            </pre>
                        </li>
                    </ul>

                </section>
                
            </Layout>
        )
    }
}