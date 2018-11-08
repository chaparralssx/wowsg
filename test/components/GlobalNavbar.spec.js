import React from 'react';
import {shallow} from 'enzyme';
import * as chai from 'chai';
let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;

import {Navbar, FormControl, FormGroup, Button, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap/lib'
import GlobalNavbar from '../../src/components/GlobalNavbar'

describe('<GlobalNavbar />', () => {
    it('renders a <Navbar /> component', () => {
        const wrapper = shallow(<GlobalNavbar/>);
        expect(wrapper.find(Navbar)).to.have.length(1);
    });
    it('renders two <Navbar.Text /> components', () => {
        const wrapper = shallow(<GlobalNavbar/>);
        expect(wrapper.find(Navbar.Text)).to.have.length(1);
    });
    it('renders two <Navbar.Form /> components', () => {
        const wrapper = shallow(<GlobalNavbar/>);
        expect(wrapper.find(Navbar.Form)).to.have.length(2);
    });
    it('renders two <FormGroup /> components', () => {
        const wrapper = shallow(<GlobalNavbar/>);
        expect(wrapper.find(FormGroup)).to.have.length(2);
    });
    it('renders three <FormControl /> components', () => {
        const wrapper = shallow(<GlobalNavbar/>);
        expect(wrapper.find(FormControl)).to.have.length(3);
    });
    it('renders three <Button /> components', () => {
        const wrapper = shallow(<GlobalNavbar/>);
        expect(wrapper.find(Button)).to.have.length(3);
    });
    it('renders a <Nav /> component', () => {
        const wrapper = shallow(<GlobalNavbar/>);
        expect(wrapper.find(Nav)).to.have.length(1);
    });
    it('renders four <NavItem /> components', () => {
        const wrapper = shallow(<GlobalNavbar/>);
        expect(wrapper.find(NavItem)).to.have.length(4);
    });
});