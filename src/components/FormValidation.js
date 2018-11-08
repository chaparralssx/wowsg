import React from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap/lib'

const FormValidation = React.createClass({
    getInitialState() {
        return {
            value: ''
        };
    },

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    },

    handleChange(e) {
        this.setState({ value: e.target.value });
    },

    render() {
        return (
            <div className="FormValidation clearfix">
                <div className="example">
                    <Form horizontal>
                        <FormGroup controlId="formBasicText" validationState={this.getValidationState()} >
                            <Col componentClass={ControlLabel} sm={2}>
                                Minimum Length Text
                            </Col>
                            <Col sm={4}>
                                <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} />
                                <FormControl.Feedback />
                                <HelpBlock>Input must be at least 10 characters</HelpBlock>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
});

export default FormValidation;