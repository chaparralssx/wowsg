import React from 'react';
import {shallow} from 'enzyme';
import * as chai from 'chai';
let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;

import PrimaryNav from '../../src/components/PrimaryNav'
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap/lib'

describe('<PrimaryNav />', () => {
    it('renders a <Navbar /> component', () => {
        const wrapper = shallow(<PrimaryNav/>);
        expect(wrapper.find(Navbar)).to.have.length(1);
    });
    it('renders a <Navbar.Header /> component', () => {
        const wrapper = shallow(<PrimaryNav/>);
        expect(wrapper.find(Navbar.Header)).to.have.length(1);
    });
    it('renders a <Navbar.Toggle /> component', () => {
        const wrapper = shallow(<PrimaryNav/>);
        expect(wrapper.find(Navbar.Toggle)).to.have.length(1);
    });
    it('renders a <Navbar.Collapse /> component', () => {
        const wrapper = shallow(<PrimaryNav/>);
        expect(wrapper.find(Navbar.Collapse)).to.have.length(1);
    });
    it('renders a <Nav /> component', () => {
        const wrapper = shallow(<PrimaryNav/>);
        expect(wrapper.find(Nav)).to.have.length(1);
    });
    it('renders a <NavItem /> component', () => {
        const wrapper = shallow(<PrimaryNav/>);
        expect(wrapper.find(NavItem)).to.have.length(1);
    });
    xit('renders five <NavDropdown /> components', () => {
        const wrapper = shallow(<PrimaryNav/>);
        expect(wrapper.find(NavDropdown)).to.have.length(5);
    });
    xit('renders 27 <MenuItem /> components', () => {
        const wrapper = shallow(<PrimaryNav/>);
        expect(wrapper.find(MenuItem)).to.have.length(27);
    });
});