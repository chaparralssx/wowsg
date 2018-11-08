import React from 'react';
import {shallow} from 'enzyme';
import * as chai from 'chai';
let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;

import Masthead from '../../src/components/Masthead'

describe('<Masthead />', () => {
    it('renders three divs', () => {
        const wrapper = shallow(<Masthead/>);
        expect(wrapper.find('div')).to.have.length(3);
    });
});