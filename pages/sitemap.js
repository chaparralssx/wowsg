import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import { PageHeader, Row, Col } from 'react-bootstrap/lib'

export default class extends Page {
    render() {
        var valueHeading="Value";
        var problemHeading="What problem does this section solve?";
        return (
            <Layout title="Site Map | " pathname={this.props.pathname}>
                <PageHeader>
                    Site Map
                </PageHeader>
                
                <section className="pageSection">
                    <h1>Calendar</h1>

                    <h2>{ problemHeading }</h2>
                    <p>SCALE does not provide appointment/scheduling functionality</p>

                    <div className="sm-component nonSCALE-function">
                        <h2>Appointment Scheduling (Inbound, Outbound, Other)</h2>
                        <h3>{ valueHeading }</h3>
                        <ul className="valueList">
                            <li>Provides a quick way to create an Appointment (required fields only)</li>
                        </ul>
                    </div>

                    <div className="sm-component nonSCALE-function">
                        <h2>Appointments Summary</h2>
                        <h3>{ valueHeading }</h3>
                        <ul className="valueList">
                            <li>Provides count of today's Inbound, Outbound and Total Arrived, Pending and Departed appointments</li>
                            <li>Provides count of today's scheduled Temperature Transfer and Ownership Transfers appointments</li>
                            <li>Provides a count of today's Cancelled and Rejected appointments</li>
                        </ul>
                    </div>

                    <div className="sm-component nonSCALE-function">
                        <h2>Appointment Grouping/UnGrouping</h2>
                        <h3>{ valueHeading }</h3>
                        <ul className="valueList">
                            <li>Allows appointments to be grouped</li>
                        </ul>
                    </div>

                    <div className="sm-component nonSCALE-function">
                        <h2>Appointment Search</h2>
                        <h3>{ valueHeading }</h3>
                        <ul className="valueList">
                            <li>Provides search function for 10 appointment attributes</li>
                        </ul>
                    </div>

                    <div className="sm-component nonSCALE-function">
                        <h2>Door Status</h2>
                        <h3>{ valueHeading }</h3>
                        <ul className="valueList">
                            <li>Displays a list of dock doors, the type of trailer in each, the scheduled appointment time and shipper number</li>
                        </ul>
                    </div>

                    <div className="sm-component nonSCALE-function">
                        <h2>Message Log</h2>
                        {/* <h3>{ valueHeading }</h3>
                        <ul className="valueList">
                            <li></li>
                        </ul> */}
                    </div>

                </section>



            </Layout>
        )
    }
}