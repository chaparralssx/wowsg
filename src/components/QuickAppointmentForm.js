import React from 'react';

class QuickAppointmentForm extends React.Component {
    render() {
        return (
            <div className="QuickAppointmentForm">
                <h3 className="sr-only">Add Appointment</h3>
                <form>
                    <div className="form-group">
                        <label for="customer">Customer</label>
                        <select className="form-control" id="customer">
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="carrier">Carrier</label>
                        <select className="form-control" id="carrier">
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <button className="btn btn-sm"><span title="Add Carrier" className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                        <label for="othercarrier" className="sr-only">Other Carrier</label>
                        <input type="text" className="form-control" id="othercarrier" />
                    </div>
                    <div className="form-group">
                        <label for="shipperno">Shipper #</label>
                        <input type="text" className="form-control" id="shipperno" />
                    </div>
                    <div className="form-group">
                        <label for="apptdate">Appointment Date</label>
                        <input type="date" className="form-control" id="apptdate" />
                    </div>
                    <div className="form-group">
                        <label for="appttime">Appointment Time</label>
                        <input type="time" className="form-control" id="appttime" />
                    </div>
                    <div className="form-group">
                        <label for="trailertype">Trailer Type</label>
                        <select className="form-control" id="trailertype">
                            <option>Live</option>
                            <option>20' Container</option>
                            <option>40' Container</option>
                            <option>Drop</option>
                            <option>Floor</option>
                            <option>LTL</option>
                            <option>No Trailer</option>
                            <option>Parcel</option>
                            <option>Shuttle</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="where">Building/Location</label>
                        <select className="form-control" id="where">
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="notes">Notes</label>
                        <input type="text" className="form-control" id="notes" />
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-primary">Add + Open</button>
                        <button className="btn btn-default">Add</button>
                        <button className="btn btn-default">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default QuickAppointmentForm;