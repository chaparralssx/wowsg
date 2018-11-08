import React from 'react';
import {shallow} from 'enzyme';
import * as chai from 'chai';
let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;

import Footer from '../../../src/components/Footer'
import {Grid, Row, Col} from 'react-bootstrap/lib'

describe('<Footer />', () => {
    xit('renders a <Grid /> component', () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper.find(Grid)).to.have.length(1);
    });
    xit('renders a <Row /> component', () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper.find(Row)).to.have.length(1);
    });
    xit('renders three <Col /> components', () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper.find(Col)).to.have.length(3);
    });
});