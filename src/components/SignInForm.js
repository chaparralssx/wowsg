import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap/lib'
import React from 'react';

class SignInForm extends React.Component {
    render() {
        return (
            <Form horizontal className="SignInForm">
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={3} xs={12}>
                        Username
                    </Col>
                    <Col sm={4} xs={8}>
                        <FormControl type="text" placeholder="Username" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={3} xs={12}>
                        Password
                    </Col>
                    <Col sm={4} xs={8}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={3} xsOffset={0} sm={4} xs={12}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={3} xsOffset={0} sm={4}>
                        <Button type="submit" bsStyle="primary">
                            Sign in
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default SignInForm;