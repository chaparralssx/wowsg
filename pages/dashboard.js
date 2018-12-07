import React from 'react'
import Layout from '../src/components/CalendarLayout'
import Calendar from '../src/components/Calendar'
import QuickAppointmentForm from '../src/components/QuickAppointmentForm'
import AppointmentSummary from '../src/components/AppointmentSummary'
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
            <Layout title="Dashboard" pathname={this.props.pathname}>
                <h1 className="hidden">Dashboard</h1>
                <div className="col-sm-2">
                    <div className="dashboardApps">
                        <h2 className="hidden">Dashboard Applications</h2>
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation"><a href="#summary" aria-controls="summary" role="tab" data-toggle="tab">Summary</a></li>
                            <li role="presentation"><a href="#group" aria-controls="group" role="tab" data-toggle="tab">Group</a></li>
                            <li role="presentation"><a href="#search" aria-controls="search" role="tab" data-toggle="tab">Search</a></li>
                            <li role="presentation"><a href="#doors" aria-controls="doors" role="tab" data-toggle="tab">Doors</a></li>
                            <li role="presentation"><a href="#log" aria-controls="log" role="tab" data-toggle="tab">Log</a></li>
                            <li role="presentation" className="active"><a href="#appt" aria-controls="appt" role="tab" data-toggle="tab">Appointment</a></li>
                        </ul>

                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane" id="summary"><AppointmentSummary /></div>
                            <div role="tabpanel" className="tab-pane" id="group">Group/UnGroup</div>
                            <div role="tabpanel" className="tab-pane" id="search">Search</div>
                            <div role="tabpanel" className="tab-pane" id="doors">Door Queue</div>
                            <div role="tabpanel" className="tab-pane" id="log">Message Log</div>
                            <div role="tabpanel" className="tab-pane active" id="appt"><QuickAppointmentForm /></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10">                    
                    <Calendar></Calendar>
                </div>
            </Layout>
        )
    }
}