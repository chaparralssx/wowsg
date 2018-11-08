import Layout from '../src/components/RFLayout'
import Page from '../src/components/Page'
import { Form, FormGroup, FormControl, InputGroup, ControlLabel, Button, Col } from 'react-bootstrap/lib'

export default class extends Page {
    render() {
        let sections = ["Spot Check"];
        return (
            <Layout title='Spot Check' pathname={this.props.pathname} sections={sections}>
                <Form horizontal>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Location
                        </Col>
                        <Col sm={10}>
                            <FormControl type="location" placeholder="" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            LPN
                        </Col>
                        <Col sm={10}>
                            <FormControl type="lpn" placeholder="" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Item
                        </Col>
                        <Col sm={10}>
                            <FormControl type="item" placeholder="" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Lot
                        </Col>
                        <Col sm={10}>
                            <FormControl type="lot" placeholder="" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Receipt
                        </Col>
                        <Col sm={10}>
                            <FormControl type="receipt" placeholder="" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" bsStyle="primary">Check</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Layout>
        )
    }

}