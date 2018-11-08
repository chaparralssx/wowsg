import React from 'react'
import Layout from '../src/components/blankpage'
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap/lib'

class ButtonBlockExample extends React.Component {

    render() {
        return (
            <Layout title="Button .block Example | ">

                <Grid fluid>

                    <Row>
                        <Col sm={6}>

                            <ButtonToolbar>
                                <Button block>btn-block with a lot of text to demonstrate multi-line buttons in various environments</Button>
                            </ButtonToolbar>

                        </Col>

                    </Row>

                </Grid>

            </Layout>
        )
    }
}

export default ButtonBlockExample;