import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import { PageHeader, Grid, Row, Col } from 'react-bootstrap/lib'
import IframeResponsiveExamples from '../src/components/IframeResponsiveExamples'

export default class extends Page {
    render() {
        return (
            <Layout title="Tables | " pathname={this.props.pathname}>
                <PageHeader>
                    Tables <small><a href="http://getbootstrap.com/css/#tables" target="_blank">Bootstrap Documentation</a></small>
                </PageHeader>

                <Grid>
                    <Row>
                        <Col sm={12} className="unapproved">
                            <h2>Tables</h2>
                            <ul>
                                <li>Border: 1px solid #ddd</li>
                                <li>Width: 100% of its container</li>
                                <li>Max width: 100% of its container</li>
                                <li>Bottom margin: 20px</li>
                                <li>Background color: transparent</li>
                                <li>Font size: same as body copy</li>
                            </ul>
                            <p>All of the above styles are applied to tables when the <code>table</code> class is applied to the table element (e.g. <code>&lt;table class="table"&gt;</code>).</p>
                            <p>In most situations, apply <code>striped</code>, <code>condensed</code>, and <code>hover</code> classes by default. (e.g. <code>&lt;table class="table striped condensed hover"&gt;</code>)</p>

                            <h2>Data Cells</h2>
                            <ul>
                                <li>Padding: 8px</li>
                                <li>Line height: 1.428571429 (@line-height-base)</li>
                                <li>Vertical align: top</li>
                                <li>Border-top: 1px solid #ddd</li>
                                <li>Font size: same as body copy</li>
                            </ul>
                            <p>All of the above styles are applied to tables when the <code>table</code> class is applied to the table element (e.g. <code>&lt;table class="table"&gt;</code>).</p>

                            <h2>Heading Cells</h2>
                            <p>Same as Data Cells except:</p>
                            <ul>
                                <li>Top border: none</li>
                                <li>Vertical align: bottom</li>
                                <li>Padding: 8px</li>
                                <li>Border-bottom: 2px solid #ddd</li>
                            </ul>
                            <p>All of the above styles are applied to tables when the <code>table</code> class is applied to the table element (e.g. <code>&lt;table class="table"&gt;</code>).</p>

                            <h2>Striped (alternating row colors)</h2>
                            <p>Use striped tables whenever the number of rows is expected to exceed two.</p>
                            <p>Starting with the first row of data cells, every other row will be:</p>
                            <ul>
                                <li>Background color: #eee (@gray-lighter)</li>
                            </ul>
                            <p>The above style is applied to tables when the <code>table</code> and <em>table-striped</em> classes are applied to the table element (e.g. <code>&lt;table class="table table-striped"&gt;</code>).</p>

                            <h2>Bordered</h2>
                            <p>When to use: </p>
                            <p>Apply a 2px border below the heading row and between all data rows</p>
                            <ul>
                                <li>Border: 1px solid #eee (@gray-lighter)</li>
                            </ul>
                            <p>The above style is applied to tables when the <code>table</code> and <em>table-bordered</em> classes are applied to the table element (e.g. <code>&lt;table class="table table-bordered"&gt;</code>).</p>

                            <h2>Condensed</h2>
                            <p>When to use: </p>
                            <p>Reduces the padding in table cells (heading and data)</p>
                            <ul>
                                <li>Padding: 5px</li>
                            </ul>
                            <p>The above style is applied to tables when the <code>table</code> and <em>table-bordered</em> classes are applied to the table element (e.g. <code>&lt;table class="table table-bordered"&gt;</code>).</p>

                            <h2>Hover Highlighting</h2>
                            <p>When to use: </p>
                            <p>Highlights data row when the mouse pointer is over them</p>
                            <ul>
                                <li>Background color: #e2e2e2 (5% darker than @gray-lighter)</li>
                            </ul>
                            <p>The above style is applied to tables when the <code>table</code> and <em>table-bordered</em> classes are applied to the table element (e.g. <code>&lt;table class="table table-bordered"&gt;</code>).</p>

                            <h2>Responsive</h2>
                            <p>Make tables responsive by wrapping any <code>&lt;table class="table"&gt;</code> in <em>.table-responsive</em> to make them scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables.  Example: <code>&lt;div class="table-responsive"&gt;&lt;table class="table"&gt;...&lt;/table&gt;&lt;/div&gt;</code></p>
                        </Col>
                    </Row>
                </Grid>

                <IframeResponsiveExamples url="/tables-example" desktopHeight={320} mobileHeight={430} />

            </Layout>
        )
    }
}