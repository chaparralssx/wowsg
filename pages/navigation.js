import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import { PageHeader, Row, Col } from 'react-bootstrap/lib'

export default class extends Page {
    render() {
        return (
            <Layout title="Navigation | " pathname={this.props.pathname}>
                <PageHeader>
                    Navigation
                </PageHeader>

                <Row>
                    <Col sm={8} className="mainCol">

                        <h2>Placement</h2>

                        <h3>Stand Alone</h3>

                        <h4>Single Link</h4>
                        <p>Add the classes <code>btn</code> and <code>btn-default</code> to <code>&lt;a class=""&gt;Link&lt;/a&gt;</code>.</p>
                        <div className="example">
                            <a href="#" className="btn btn-default">Next Page</a>
                        </div>
                        <p>Or add the classes <code>btn btn-default btn-block</code> to <code>&lt;a class=""&gt;Link&lt;/a&gt;</code> to fill the container.</p>
                        <div className="example">
                            <a href="#" className="btn btn-default btn-block">Next Page</a>
                        </div>

                        <h4>List</h4>
                        <p>Do not apply any style classes.  Display the links as an unordered list (<code>&lt;ul&gt;</code>).</p>
                        <div className="example">
                            <ul>
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 3</a></li>
                                <li><a href="#">Link 4</a></li>
                            </ul>
                        </div>


                        <h3>Inline</h3>
                        <p>Do not apply any style classes.</p>
                        <div className="highlight">
                            <pre>&lt;p&gt;This is a paragraph with an &lt;a href="page.html"&gt;inline link&lt;/a&gt;.&lt;/p&gt;</pre>
                        </div>
                        <div className="example">
                            <p>This is a paragraph with an <a href="page.html">inline link</a>.</p>
                        </div>
                    </Col>

                    <Col sm={4} className="rightCol">
                        <nav aria-labelledby="sideNavLabel" className="navGroup">
                            <h2 id="sideNavLabel">Side Navigation</h2>
                            <p className="text-danger">! This section is not styled yet.  Component HTML added here for discussion.  -Scott B., 7/28/2017</p>
                            <ul className="nav nav-pills nav-stacked">
                                <li>
                                    <a href="" className="btn btn-lg btn-info">
                                        <div className="media">
                                            <div className="media-left"><img src="/static/images/icon-find-doc.png" alt="Doctor icon" /></div>
                                            <div className="media-body">Find a Doctor</div>
                                        </div>
                                    </a>
                                </li>
                                <li><a href="">MDLIVE Virtual Visits</a></li>
                                <li><a href="">Printable Directory</a></li>
                                <li><a href="" target="_blank">If you have the VSP logo on the back of your ID Card, click here for vision doctors</a></li>
                                <li><a href="" target="_blank">Check Certification Status with the American Board of Medical Specialties</a></li>
                                <li><a href="" target="_blank">How to use this Search</a></li>
                                <li><a href="" target="_blank">Common Questions and Answers about ThedaCare</a></li>
                            </ul>
                        </nav>
                    
                        <nav aria-labelledby="sideNav2Label" className="navGroup">
                            <h2 id="sideNav2Label">Second Side Nav</h2>
                            <ul className="nav nav-pills nav-stacked">
                                <li>
                                    <a href="" className="btn btn-lg btn-primary">
                                        <div className="media">
                                            <div className="media-left"><img src="/static/images/icon-findafacility.png" alt="Facility icon" /></div>
                                            <div className="media-body">Find a Facility</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="btn btn-lg btn-success">
                                        <div className="media">
                                            <div className="media-left"><img src="/static/images/icon-find-pharmacy.png" alt="Pharmacy icon" /></div>
                                            <div className="media-body">Find a Pharmacy</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    
                        <nav aria-labelledby="sideNav3Label" className="navGroup">
                            <h2 id="sideNav3Label" className="hidden">Third Side Nav</h2>
                            <ul className="nav nav-pills nav-stacked">
                                <li>
                                    <a href="" className="btn btn-lg btn-default">Find Medication</a>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>

            </Layout>
        )
    }
}
