import React from 'react'
import Layout from '../src/components/blankpage'
import CalendarContent from '../src/components/Calendar'

class Calendar extends React.Component {

    render() {

        return (
            <Layout title="Calendar">
                <CalendarContent/>
            </Layout>
        )
    }
}

export default Calendar;