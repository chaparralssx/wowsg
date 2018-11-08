import React from 'react'
import Layout from '../src/components/CalendarLayout'
import { PageHeader } from 'react-bootstrap/lib'
import Page from '../src/components/Page'

export default class extends Page {
    /**
     * This is an example of how the getInitialProps can still do custom things
     * on top of the one it extends from to get the pathname variable.
     * @param req
     * @param pathname
     */
    // static async getInitialProps ({ req, pathname }) {
    //     let superProps = await super.getInitialProps({ req, pathname });
    //     return Object.assign(superProps, {testProp: 'test'});
    // }

    render() {
        return (
            <Layout title="" pathname={this.props.pathname}>
                <table className="table table-striped table-condensed table-hover">
                    <thead>
                        <th>Group</th>
                        <th title="Appointment Time">Time</th>
                        <th title="Appointment Type">Type</th>
                        <th title="Appointment Status">Status</th>
                        <th title="Transportation Carrier Name">Carrier</th>
                        <th title="Shipper Number">Shipper #</th>
                        <th title="Confirmation Number">Confirm #</th>
                        <th title="SCALE Transaction ID">Trans #</th>
                        <th title="Warehouse Dock Door Number">Door #</th>
                        <th title="Warehouse Building">Where</th>
                        <th>Trailer Type</th>
                        <th>Order Status</th>
                        <th>Notes</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" title="Select to group appointments" />
                                    </label>
                                </div>
                            </td>
                            <td>12:30 A</td>
                            <td title="Outbound Appointment">Out</td>
                            <td>Arrived</td>
                            <td>Schneider Trucking</td>
                            <td title="Land O Lakes - Wisconsin Rapids Cooler">LOLWRC</td>
                            <td>SA02200</td>
                            <td>SAR12345</td>
                            <td>SHP07</td>
                            <td>Pittsville</td>
                            <td>Drop</td>
                            <td>No Order</td>
                            <td>Notes go here</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" title="Select to group appointments" />
                                    </label>
                                </div>
                            </td>
                            <td>12:30 A</td>
                            <td title="Outbound Appointment">Out</td>
                            <td>Arrived</td>
                            <td>Schneider Trucking</td>
                            <td title="Land O Lakes - Wisconsin Rapids Cooler">LOLWRC</td>
                            <td>SA02200</td>
                            <td>SAR12345</td>
                            <td>SHP07</td>
                            <td>Pittsville</td>
                            <td>Drop</td>
                            <td>No Order</td>
                            <td>Notes go here</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" title="Select to group appointments" />
                                    </label>
                                </div>
                            </td>
                            <td>12:30 A</td>
                            <td title="Outbound Appointment">Out</td>
                            <td>Arrived</td>
                            <td>Schneider Trucking</td>
                            <td title="Land O Lakes - Wisconsin Rapids Cooler">LOLWRC</td>
                            <td>SA02200</td>
                            <td>SAR12345</td>
                            <td>SHP07</td>
                            <td>Pittsville</td>
                            <td>Drop</td>
                            <td>No Order</td>
                            <td>Notes go here</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" title="Select to group appointments" />
                                    </label>
                                </div>
                            </td>
                            <td>12:30 A</td>
                            <td title="Outbound Appointment">Out</td>
                            <td>Arrived</td>
                            <td>Schneider Trucking</td>
                            <td title="Land O Lakes - Wisconsin Rapids Cooler">LOLWRC</td>
                            <td>SA02200</td>
                            <td>SAR12345</td>
                            <td>SHP07</td>
                            <td>Pittsville</td>
                            <td>Drop</td>
                            <td>No Order</td>
                            <td>Notes go here</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" title="Select to group appointments" />
                                    </label>
                                </div>
                            </td>
                            <td>12:30 A</td>
                            <td title="Outbound Appointment">Out</td>
                            <td>Arrived</td>
                            <td>Schneider Trucking</td>
                            <td title="Land O Lakes - Wisconsin Rapids Cooler">LOLWRC</td>
                            <td>SA02200</td>
                            <td>SAR12345</td>
                            <td>SHP07</td>
                            <td>Pittsville</td>
                            <td>Drop</td>
                            <td>No Order</td>
                            <td>Notes go here</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" title="Select to group appointments" />
                                    </label>
                                </div>
                            </td>
                            <td>12:30 A</td>
                            <td title="Outbound Appointment">Out</td>
                            <td>Arrived</td>
                            <td>Schneider Trucking</td>
                            <td title="Land O Lakes - Wisconsin Rapids Cooler">LOLWRC</td>
                            <td>SA02200</td>
                            <td>SAR12345</td>
                            <td>SHP07</td>
                            <td>Pittsville</td>
                            <td>Drop</td>
                            <td>No Order</td>
                            <td>Notes go here</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" title="Select to group appointments" />
                                    </label>
                                </div>
                            </td>
                            <td>12:30 A</td>
                            <td title="Outbound Appointment">Out</td>
                            <td>Arrived</td>
                            <td>Schneider Trucking</td>
                            <td title="Land O Lakes - Wisconsin Rapids Cooler">LOLWRC</td>
                            <td>SA02200</td>
                            <td>SAR12345</td>
                            <td>SHP07</td>
                            <td>Pittsville</td>
                            <td>Drop</td>
                            <td>No Order</td>
                            <td>Notes go here</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" title="Select to group appointments" />
                                    </label>
                                </div>
                            </td>
                            <td>12:30 A</td>
                            <td title="Outbound Appointment">Out</td>
                            <td>Arrived</td>
                            <td>Schneider Trucking</td>
                            <td title="Land O Lakes - Wisconsin Rapids Cooler">LOLWRC</td>
                            <td>SA02200</td>
                            <td>SAR12345</td>
                            <td>SHP07</td>
                            <td>Pittsville</td>
                            <td>Drop</td>
                            <td>No Order</td>
                            <td>Notes go here</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" title="Select to group appointments" />
                                    </label>
                                </div>
                            </td>
                            <td>12:30 A</td>
                            <td title="Outbound Appointment">Out</td>
                            <td>Arrived</td>
                            <td>Schneider Trucking</td>
                            <td title="Land O Lakes - Wisconsin Rapids Cooler">LOLWRC</td>
                            <td>SA02200</td>
                            <td>SAR12345</td>
                            <td>SHP07</td>
                            <td>Pittsville</td>
                            <td>Drop</td>
                            <td>No Order</td>
                            <td>Notes go here</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" title="Select to group appointments" />
                                    </label>
                                </div>
                            </td>
                            <td>12:30 A</td>
                            <td title="Outbound Appointment">Out</td>
                            <td>Arrived</td>
                            <td>Schneider Trucking</td>
                            <td title="Land O Lakes - Wisconsin Rapids Cooler">LOLWRC</td>
                            <td>SA02200</td>
                            <td>SAR12345</td>
                            <td>SHP07</td>
                            <td>Pittsville</td>
                            <td>Drop</td>
                            <td>No Order</td>
                            <td>Notes go here</td>
                        </tr>
                    </tbody>
                </table>
            </Layout>
        )
    }
}