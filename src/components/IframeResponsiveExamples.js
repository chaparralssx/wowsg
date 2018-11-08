import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap/lib'

// const dHeight = {
//     height: desktopHeight
// };
// const mHeight = {
//     height: mobileHeight
// };

export default ({ url, desktopHeight, mobileHeight }) => (
    <section className="IframeResponsiveExamples">
        <h2>Examples</h2>

        <Tabs defaultActiveKey={1} id="iFrameResponsiveExamples-tabs">
            <Tab eventKey={1} title="Desktop/Tablet">
                <Row>
                    <Col sm={12}>
                        <iframe src={url} className="example" style={{height: desktopHeight}}></iframe>
                    </Col>
                </Row>
            </Tab>

            <Tab eventKey={2} title="Mobile">
                <Row>
                    <Col sm={4}>
                        <iframe src={url} className="example" style={{height: mobileHeight}}></iframe>
                    </Col>
                </Row>
            </Tab>
        </Tabs>



    </section>
)