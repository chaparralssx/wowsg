import React from 'react';

class AppointmentSummary extends React.Component {
    render() {
        return (
            <div className="AppointmentSummary">
                <h3 className="hidden">Appointments Summary</h3>
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            <th className="type"><span className="hidden">Type</span></th>
                            <th className="inbound">In</th>
                            <th className="outbound">Out</th>
                            <th className="total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="arrived">
                            <th className="type">Arrived</th>
                            <td className="inbound"></td>
                            <td className="outbound"></td>
                            <td className="total"></td>
                        </tr>
                        <tr className="pending">
                            <th className="type">Pending</th>
                            <td className="inbound"></td>
                            <td className="outbound"></td>
                            <td className="total"></td>
                        </tr>
                        <tr className="departed">
                            <th className="type">Departed</th>
                            <td className="inbound"></td>
                            <td className="outbound"></td>
                            <td className="total"></td>
                        </tr>
                        <tr className="temptrans">
                            <th className="type">Temp Transfers</th>
                            <td className="inbound"></td>
                            <td className="outbound"></td>
                            <td className="total"></td>
                        </tr>
                        <tr className="owntrans">
                            <th className="type">Ownership Transfers</th>
                            <td className="inbound"></td>
                            <td className="outbound"></td>
                            <td className="total"></td>
                        </tr>
                        <tr className="totappts">
                            <th className="type">Total Appointments</th>
                            <td className="inbound"></td>
                            <td className="outbound"></td>
                            <td className="total"></td>
                        </tr>
                        <tr className="tottrans">
                            <th className="type">Total Transactions</th>
                            <td className="inbound"></td>
                            <td className="outbound"></td>
                            <td className="total"></td>
                        </tr>
                        <tr className="cancelled">
                            <th className="type">Cancelled</th>
                            <td className="inbound"></td>
                            <td className="outbound"></td>
                            <td className="total"></td>
                        </tr>
                        <tr className="rejected">
                            <th className="type">Rejected</th>
                            <td className="inbound"></td>
                            <td className="outbound"></td>
                            <td className="total"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AppointmentSummary;