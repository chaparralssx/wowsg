import React from 'react'
import Layout from '../src/components/blankpage'
import { Grid, Row, Col, Tabs, Tab, Table } from 'react-bootstrap/lib'

class TablesExample extends React.Component {

    render() {

        return (
            <Layout title="Tables Examples | ">

                <Grid fluid>

                    <Row>

                        <Col sm={12}>

                            <Tabs defaultActiveKey={1} id="activity-tables">
                                <Tab eventKey={1} title="Standard">
                                    <div className="table-responsive">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                    <th>Date of Birth</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>10/11/2012</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>01/02/2003</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                    <td>09/08/1977</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab>
                                <Tab eventKey={2} title="Striped">
                                    <div className="table-responsive">
                                        <Table striped>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                    <th>Date of Birth</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>10/11/2012</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>01/02/2003</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                    <td>09/08/1977</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab>
                                <Tab eventKey={3} title="Bordered">
                                    <div className="table-responsive">
                                        <Table bordered>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                    <th>Date of Birth</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>10/11/2012</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>01/02/2003</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                    <td>09/08/1977</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab>
                                <Tab eventKey={4} title="Condensed">
                                    <div className="table-responsive">
                                        <Table condensed>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                    <th>Date of Birth</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>10/11/2012</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>01/02/2003</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                    <td>09/08/1977</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab>
                                <Tab eventKey={5} title="Hover">
                                    <div className="table-responsive">
                                        <Table hover>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                    <th>Date of Birth</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>10/11/2012</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>01/02/2003</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                    <td>09/08/1977</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab>
                                <Tab eventKey={6} title="All Variations">
                                    <div className="table-responsive">
                                        <Table striped bordered condensed hover>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                    <th>Date of Birth</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>10/11/2012</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>01/02/2003</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                    <td>09/08/1977</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab>
                            </Tabs>

                        </Col>

                    </Row>

                </Grid>

            </Layout>
        )
    }
}

export default TablesExample;