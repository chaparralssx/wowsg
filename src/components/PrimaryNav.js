import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown, Glyphicon} from 'react-bootstrap/lib'
import link from '../utils/bootstrapLink';

class PrimaryNav extends React.Component {

    isActive(route) {
        //alert('PrimaryNav.js');
        if (this.props.pathname === route) {
            return 'active';
        } else {
            return '';
        }
    }

    render() {
        return (
            <Navbar collapseOnSelect fluid className="PrimaryNav navbar-fixed-top" aria-label="Primary Navigation">
                <Navbar.Header>
                    <Navbar.Toggle />
                    <span className="toggle-title">Menu {this.props.pathname}</span>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} onClick={(e) => link.handleLink(e, '/')} href="/" active={link.isActive(this.props.pathname, '/')}className="home-logo"><img src="/static/images/logo-wow-logistics.png" alt="WOW Logistics Logo" title="Return to the homepage" /></NavItem>
                        <NavDropdown eventKey={2} title="Calendar" id="calendar-dropdown">
                            <MenuItem eventKey={2.1} onClick={(e) => link.handleLink(e, '/calendar')} href="/">Dashboard</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.2}>Search</MenuItem>
                            <MenuItem eventKey={2.3}>Schedule Recurring</MenuItem>
                            <MenuItem eventKey={2.4}>Orders</MenuItem>
                            <MenuItem eventKey={2.5}>Door Queues</MenuItem>
                            <MenuItem eventKey={2.6}>EDI Insights</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Inventory" id="inventory-dropdown">
                            <MenuItem eventKey={3.1}>Change Catch Weight</MenuItem>
                            <MenuItem eventKey={3.2}>Change Product Class</MenuItem>
                            <MenuItem eventKey={3.3}>Change Product HOLD</MenuItem>
                            <MenuItem eventKey={3.4}>Change Make Date</MenuItem>
                            <MenuItem eventKey={3.5}>Edit Inventory</MenuItem>
                            <MenuItem eventKey={3.6}>Edit Receipt</MenuItem>
                            <MenuItem eventKey={3.7}>Edit Shipment</MenuItem>
                            <MenuItem eventKey={3.8}>Ownership Transfers</MenuItem>
                            <MenuItem eventKey={3.9}>Temperature Transfer</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Tools" id="tools-dropdown">
                            <MenuItem eventKey={4.2}>Link 1</MenuItem>
                            <MenuItem eventKey={4.3}>Link 2</MenuItem>
                            <MenuItem eventKey={4.4}>Link 3</MenuItem>
                            <MenuItem eventKey={4.5}>Link 5</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={5} title="Reports" id="reports-dropdown">
                            <MenuItem eventKey={5.2}>Link 1</MenuItem>
                            <MenuItem eventKey={5.3}>Link 2</MenuItem>
                            <MenuItem eventKey={5.4}>Link 3</MenuItem>
                            <MenuItem eventKey={5.5}>Link 5</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={6} title="Print" id="print-dropdown">
                            <MenuItem eventKey={6.2}>Link 1</MenuItem>
                            <MenuItem eventKey={6.3}>Link 2</MenuItem>
                            <MenuItem eventKey={6.4}>Link 3</MenuItem>
                            <MenuItem eventKey={6.5}>Link 5</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={7} title="Links" id="links-dropdown">
                            <MenuItem eventKey={7.2}>Link 1</MenuItem>
                            <MenuItem eventKey={7.3}>Link 2</MenuItem>
                            <MenuItem eventKey={7.4}>Link 3</MenuItem>
                            <MenuItem eventKey={7.5}>Link 5</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={2} title="Style Guide" id="wsg-nav-dropdown">
                            <MenuItem eventKey={2.1} onClick={(e) => link.handleLink(e, '/alerts')} href="/alerts" active={link.isActive(this.props.pathname, '/alerts')}>Alerts</MenuItem>
                            <MenuItem eventKey={2.2} onClick={(e) => link.handleLink(e, '/button')} href="/button" active={link.isActive(this.props.pathname, '/button')}>Button</MenuItem>
                            <MenuItem eventKey={2.3} onClick={(e) => link.handleLink(e, '/colorpallete')} href="/colorpallete" active={link.isActive(this.props.pathname, '/colorpallete')}>Color Pallete</MenuItem>
                            <MenuItem eventKey={2.4} onClick={(e) => link.handleLink(e, '/forms')} href="/forms" active={link.isActive(this.props.pathname, '/forms')}>Forms</MenuItem>
                            <MenuItem eventKey={2.5} onClick={(e) => link.handleLink(e, '/signin')} href="/signin" active={link.isActive(this.props.pathname, '/signin')}>Sign In Form</MenuItem>
                            <MenuItem eventKey={2.6} onClick={(e) => link.handleLink(e, '/navigation') } href="/navigation" active={link.isActive(this.props.pathname, '/navigation')}>Navigation</MenuItem>
                            <MenuItem eventKey={2.7} onClick={(e) => link.handleLink(e, '/panel')} href="/panel" active={link.isActive(this.props.pathname, '/panel')}>Panel</MenuItem>
                            <MenuItem eventKey={2.8} onClick={(e) => link.handleLink(e, '/tabs')} href="/tabs" active={link.isActive(this.props.pathname, '/tabs')}>Tabs</MenuItem>
                            <MenuItem eventKey={2.9} onClick={(e) => link.handleLink(e, '/tables')} href="/tables" active={link.isActive(this.props.pathname, '/tables')}>Tables</MenuItem>
                            <MenuItem eventKey={2.10} onClick={(e) => link.handleLink(e, '/typography') } href="/typography" active={link.isActive(this.props.pathname, '/typography')}>Typography</MenuItem>
                            <MenuItem eventKey={2.11} onClick={(e) => link.handleLink(e, '/words') } href="/words" active={link.isActive(this.props.pathname, '/words')}>Words</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default PrimaryNav;