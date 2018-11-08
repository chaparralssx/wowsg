import React from 'react'
import Layout from '../src/components/blankpage'
import { Grid, Row, Col, Tabs, Tab, Table } from 'react-bootstrap/lib'
import SignInForm from '../src/components/SignInForm'

class TablesExample extends React.Component {

    render() {

        return (
            <Layout title="Sign In Form Examples | ">

                <Grid fluid>

                    <Row>

                        <Col sm={12}>

                            <SignInForm/>

                        </Col>

                    </Row>

                </Grid>

            </Layout>
        )
    }
}

export default TablesExample;