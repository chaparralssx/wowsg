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

                <div className="unapproved">

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
                </div>

            </Layout>
        )
    }
}
