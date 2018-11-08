import React from 'react'
import Layout from '../src/components/blankpage'
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap/lib'

class TabsExample extends React.Component {

    render() {

      var tabContent = {
          minHeight: 200
      };

        return (
            <Layout title="Tabs Example | ">

                <Grid fluid>

                    <Row>

                        <Col sm={12}>

                            <Tabs defaultActiveKey={1} id="activity-tabs">
                                <Tab eventKey={1} title="Tab 1" style={tabContent}>
                                    Tab 1 content
                                </Tab>
                                <Tab eventKey={2} title="Tab 2" style={tabContent}>
                                    Tab 2 content
                                </Tab>
                                <Tab eventKey={3} title="Tab 3" style={tabContent}>
                                    Tab 3 content
                                </Tab>
                                <Tab eventKey={4} title="Tab 4" style={tabContent}>
                                    Tab 4 content
                                </Tab>
                                <Tab eventKey={5} title="Tab 5" style={tabContent}>
                                    Tab 5 content
                                </Tab>
                                <Tab eventKey={6} title="Tab 6" style={tabContent}>
                                    Tab 6 content
                                </Tab>
                                <Tab eventKey={7} title="Tab 7" style={tabContent}>
                                    Tab 7 content
                                </Tab>
                            </Tabs>

                        </Col>

                    </Row>

                </Grid>

            </Layout>
        )
    }
}

export default TabsExample;