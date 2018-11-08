import React from 'react';
import {shallow} from 'enzyme';
import * as chai from 'chai';
let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;


import Layout from '../../src/components/Layout';
import Masthead from '../../src/components/Masthead'
import PrimaryNav from '../../src/components/PrimaryNav'
import Footer from '../../src/components/Footer'
import GlobalNavbar from '../../src/components/GlobalNavbar'
import Carousel from '../../src/components/Carousel'
import {Grid, Row} from 'react-bootstrap/lib'

describe('<Layout />', () => {
    it('renders a <GlobalNavbar /> component', () => {
        const wrapper = shallow(<Layout/>);
        expect(wrapper.find(GlobalNavbar)).to.have.length(1);
    });

    it('renders a <Masthead /> component', () => {
      const wrapper = shallow(<Layout/>);
      expect(wrapper.find(Masthead)).to.have.length(1);
   });

   it('renders a <PrimaryNav /> component', () => {
      const wrapper = shallow(<Layout/>);
       expect(wrapper.find(PrimaryNav)).to.have.length(1);
   });

    it('renders a <Carousel /> component', () => {
        const wrapper = shallow(<Layout/>);
        expect(wrapper.find(Carousel)).to.have.length(0);
    });

    it('renders a <Footer /> component', () => {
        const wrapper = shallow(<Layout/>);
        expect(wrapper.find(Footer)).to.have.length(1);
    });

    it('renders a <Grid /> component', () => {
       const wrapper = shallow(<Layout/>);
       expect(wrapper.find(Grid)).to.have.length(1);
    });

    it('renders four <Row /> components', () => {
        const wrapper = shallow(<Layout/>);
        expect(wrapper.find(Row)).to.have.length(3);
    });

    it('renders child components', () => {
        const wrapper = shallow(<Layout><p>Test</p></Layout>);
        expect(wrapper.find('p')).to.have.length(1);
    });

});