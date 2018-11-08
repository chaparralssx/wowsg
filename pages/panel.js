import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import {PageHeader, Panel, Accordion} from 'react-bootstrap/lib'

export default class extends Page {
    render() {
        return (
            <Layout title="Panels | " pathname={this.props.pathname}>
                <PageHeader>
                    Panels <small><a href="https://react-bootstrap.github.io/components.html#panels" target="_blank">Documentation</a></small>
                </PageHeader>

                <p>Panel's apply border and padding to contain content. You can create a panel with <span className="nt">&lt;panel&gt;</span>.</p>
                <Panel header="This is a panel heading">
                    <p>Panel content</p>
                    <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
                </Panel>

                <div>
                    <Panel header="This is a panel heading" bsStyle="primary">
                        Panel content
                    </Panel>

                    <Panel header="This is a panel heading" bsStyle="success">
                        Panel content
                    </Panel>

                    <Panel header="This is a panel heading" bsStyle="info">
                        Panel content
                    </Panel>

                    <Panel header="This is a panel heading" bsStyle="warning">
                        Panel content
                    </Panel>

                    <Panel header="This is a panel heading" bsStyle="danger">
                        Panel content
                    </Panel>
                </div>

                <label htmlFor="Accordion">Accordions</label>
                <Accordion>
                    <Panel header="Collapsible Group Item #1" eventKey="1">
                        Panel content 1
                    </Panel>
                    <Panel header="Collapsible Group Item #2" eventKey="2">
                        Panel content 2
                    </Panel>
                </Accordion>
            </Layout>
        )
    }
}
