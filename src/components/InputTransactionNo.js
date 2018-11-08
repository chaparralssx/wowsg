import { Form, FormGroup, FormControl, InputGroup, Button, Alert } from 'react-bootstrap/lib'
import React from 'react'

class InputTransactionNo extends React.Component {
    
    render() {
        return (
            <Form inline>

                <Alert bsStyle="danger">
                    <Button className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                    Please enter a valid <strong>transaction&nbsp;#</strong>
                </Alert>

                <FormGroup className="InputTransactionNo">
                    <InputGroup bsSize="small">
                        <FormControl type="text" placeholder="Scan or type transaction #" />
                        <InputGroup.Button>
                            <Button bsStyle="primary">Go</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </Form>
        )
    }
}

export default InputTransactionNo;