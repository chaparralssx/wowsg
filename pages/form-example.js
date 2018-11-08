import React from 'react'
import Layout from '../src/components/blankpage'
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap/lib'

class FormExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <Layout title="Form Example | ">

                <Grid fluid>

                    <Row>
                        <Col sm={12}>

                            <Form horizontal>

                                <fieldset>
                                    <legend>Fieldset Legend</legend>

                                    <FormGroup>
                                        <Col sm={4} smOffset={2}>
                                            <div className="required-message">Required</div>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formBasicText" validationState={this.getValidationState()} >
                                        <Col componentClass={ControlLabel} sm={2} className="required">
                                            Input label
                                        </Col>
                                        <Col sm={4}>
                                            <FormControl type="text" value={this.state.value} placeholder="Input field placeholder text" onChange={this.handleChange} />
                                            <FormControl.Feedback />
                                            <HelpBlock>Help Block - Input must be at least 10 characters</HelpBlock>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col componentClass={ControlLabel} sm={2} className="required">
                                            Email
                                        </Col>
                                        <Col sm={4}>
                                            <FormControl type="email" placeholder="Email Address" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col componentClass={ControlLabel} sm={2} className="required">
                                            Password
                                        </Col>
                                        <Col sm={4}>
                                            <FormControl type="password" placeholder="Password" />
                                        </Col>
                                    </FormGroup>
                                </fieldset>


                                <fieldset>
                                    <legend>Fieldset Legend</legend>

                                    <FormGroup>
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Check boxes
                                        </Col>
                                        <Col sm={4}>
                                            <Checkbox name="example-checkboxes" inline>
                                                1
                                        </Checkbox>
                                            {' '}
                                            <Checkbox name="example-checkboxes" inline>
                                                2
                                        </Checkbox>
                                            {' '}
                                            <Checkbox name="example-checkboxes" inline>
                                                3
                                        </Checkbox>
                                        </Col>
                                    </FormGroup>


                                    <FormGroup>
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Radio buttons
                                        </Col>
                                        <Col sm={4}>
                                            <Radio name="example-radios" inline>
                                                1
                                        </Radio>
                                            {' '}
                                            <Radio name="example-radios" inline>
                                                2
                                        </Radio>
                                            {' '}
                                            <Radio name="example-radios" inline>
                                                3
                                        </Radio>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formControlsSelect">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Select
                                        </Col>
                                        <Col sm={4}>
                                            <FormControl componentClass="select" placeholder="select">
                                                <option value="select">Select one</option>
                                                <option value="opt2">Option one</option>
                                                <option value="opt3">Option two</option>
                                                <option value="opt4">Option three</option>
                                                <option value="opt5">Option four</option>
                                            </FormControl>
                                        </Col>
                                    </FormGroup>


                                    <FormGroup controlId="formControlsSelectMultiple">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Multiple select
                                    </Col>
                                        <Col sm={4}>
                                            <FormControl componentClass="select" multiple>
                                                <option value="select">Select one or more</option>
                                                <option value="opt2">Option one</option>
                                                <option value="opt3">Option two</option>
                                                <option value="opt4">Option three</option>
                                                <option value="opt5">Option four</option>
                                            </FormControl>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formControlsTextarea">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Textarea
                                    </Col>
                                        <Col sm={4}>
                                            <FormControl componentClass="textarea" placeholder="textarea" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Static text
                                    </Col>
                                        <Col sm={4}>
                                            <FormControl.Static>email@example.com</FormControl.Static>
                                        </Col>
                                    </FormGroup>

                                </fieldset>

                                <Row>
                                    <Col sm={4} smOffset={2}>
                                        <div className="btn-toolbar">
                                            <Button type="submit" bsStyle="primary">
                                                Submit
                                            </Button>

                                            <Button type="button">
                                                Cancel
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>

                            </Form>

                        </Col>

                    </Row>

                </Grid>

            </Layout>
        )
    }
}

export default FormExample;