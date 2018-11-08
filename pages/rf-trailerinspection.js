import Layout from '../src/components/RFLayout'
import Page from '../src/components/Page'
import { Table, Well, FormControl, ButtonToolbar, Button, Glyphicon, Alert } from 'react-bootstrap/lib'

export default class extends Page {

    render() {

        let sections=["Receiving|rf-receiving","Transaction|rf-rec-receipttransaction","Summary|rf-rec-receiptputaway-summary"];

        return (
            <Layout title='Trailer Inspection' pathname={this.props.pathname} sections={sections} backlink='rf-rec-receiptputaway-summary'>
                <Well bsSize="small" className="StatusBox">
                    <div className="transactionid">WRDR566018</div>
                </Well>

                <Alert bsStyle="success">
                    <Button className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                    Trailer Inspection saved
                </Alert>

                <Alert bsStyle="danger">
                    <Button className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                    Complete all required fields
                </Alert>

                <Table condensed bordered className="formTable">
                    <tbody>
                        <tr>
                            <th>Clean/Dry</th>
                            <td>
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-default">
                                        <input type="radio" name="optionsa" id="option1" autocomplete="off" /> Yes
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="optionsa" id="option2" autocomplete="off" /> No
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Smell Clean</th>
                            <td>
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-default">
                                        <input type="radio" name="optionsb" id="option3" autocomplete="off" /> Yes
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="optionsb" id="option4" autocomplete="off" /> No
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Need Repair</th>
                            <td>
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option1" autocomplete="off" /> Yes
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option2" autocomplete="off" /> No
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Insects</th>
                            <td>
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option1" autocomplete="off" /> Yes
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option2" autocomplete="off" /> No
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Reefer Running</th>
                            <td>
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option1" autocomplete="off" /> Yes
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option2" autocomplete="off" /> No
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option3" autocomplete="off" /> NA
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Set Point</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Reefer Temp</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Prod Temp 1</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Prod Temp 2</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Prod Temp 3</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Trailer #</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Padlock</th>
                            <td>
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option1" autocomplete="off" /> Yes
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option2" autocomplete="off" /> No
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Seal Intact</th>
                            <td>
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option1" autocomplete="off" /> Yes
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option2" autocomplete="off" /> No
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option3" autocomplete="off" /> NA
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Seal #</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Ld per Driver</th>
                            <td>
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option1" autocomplete="off" /> Yes
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option2" autocomplete="off" /> No
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Slip Sheet</th>
                            <td>
                                <div className="btn-group" data-toggle="buttons">
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option1" autocomplete="off" /> Yes
                                    </label>
                                    <label className="btn btn-default">
                                        <input type="radio" name="options" id="option2" autocomplete="off" /> No
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Rejected Reason</th>
                            <td>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value=""></option>
                                    <option value="Blood">Blood</option>
                                    <option value="Chemicals on Trlr">Chemicals on Trlr</option>
                                    <option value="Glass">Glass</option>
                                    <option value="Holes">Holes</option>
                                    <option value="Ice/Frost">Ice/Frost</option>
                                    <option value="Insects">Insects</option>
                                    <option value="Kickplates">Kickplates</option>
                                    <option value="Leaks">Leaks</option>
                                    <option value="Odor">Odor</option>
                                    <option value="Metal">Metal</option>
                                    <option value="Structural/Safety">Structural/Safety</option>
                                    <option value="Wet Floor">Wet Floor</option>
                                    <option value="Wet Wall/Ceiling">Wet Wall/Ceiling</option>
                                    <option value="Wood">Wood</option>
                                    <option value="Foreign Material">Foreign Material</option>
                                </FormControl>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button bsStyle="default btn-back"><Glyphicon glyph="arrow-left" /> Back</Button>
                    <Button bsStyle="default btn-save">Save</Button>
                    <a className="btn btn-primary pull-right btn-next" href="rf-palletinspection">Pallets <Glyphicon glyph="arrow-right" /></a>
                </ButtonToolbar>

            </Layout>
        )
    }

}