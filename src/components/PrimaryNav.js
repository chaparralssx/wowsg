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
            <Navbar collapseOnSelect fluid className="PrimaryNav" aria-label="Primary Navigation">
                <Navbar.Header>
                    <Navbar.Toggle />
                    <span className="toggle-title">Menu {this.props.pathname}</span>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} onClick={(e) => link.handleLink(e, '/')} href="/" active={link.isActive(this.props.pathname, '/')}><Glyphicon glyph="home" title="Return to Homepage" /><span className="link-title"> Home</span></NavItem>
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
                        </NavDropdown>
                        <NavDropdown eventKey={2} title="Warehousing" id="nh-nav-dropdown">
                            <MenuItem eventKey={2.1} onClick={(e) => link.handleLink(e, '/warehousing')} href="/">Warehousing &amp; Distribution</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.2}>Link 1</MenuItem>
                            <MenuItem eventKey={2.3}>Link 2</MenuItem>
                            <MenuItem eventKey={2.4}>Link 3</MenuItem>
                            <MenuItem eventKey={2.5}>Link 5</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Transportation" id="section-3-dropdown">
                        <MenuItem eventKey={3.2}>Link 1</MenuItem>
                        <MenuItem eventKey={3.3}>Link 2</MenuItem>
                        <MenuItem eventKey={3.4}>Link 3</MenuItem>
                        <MenuItem eventKey={3.5}>Link 5</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Commodity Purchase" id="section-4-dropdown" className="hidden">
                        <MenuItem eventKey={4.2}>Link 1</MenuItem>
                        <MenuItem eventKey={4.3}>Link 2</MenuItem>
                        <MenuItem eventKey={4.4}>Link 3</MenuItem>
                        <MenuItem eventKey={4.5}>Link 5</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={5} title="Build-to-Suit" id="section-5-dropdown">
                        <MenuItem eventKey={5.2}>Link 1</MenuItem>
                        <MenuItem eventKey={5.3}>Link 2</MenuItem>
                        <MenuItem eventKey={5.4}>Link 3</MenuItem>
                        <MenuItem eventKey={5.5}>Link 5</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={6} title="Contract Ops" id="section-6-dropdown">
                        <MenuItem eventKey={6.2}>Link 1</MenuItem>
                        <MenuItem eventKey={6.3}>Link 2</MenuItem>
                        <MenuItem eventKey={6.4}>Link 3</MenuItem>
                        <MenuItem eventKey={6.5}>Link 5</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={7} title="Locations" id="section-7-dropdown">
                        <MenuItem eventKey={7.2}>Link 1</MenuItem>
                        <MenuItem eventKey={7.3}>Link 2</MenuItem>
                        <MenuItem eventKey={7.4}>Link 3</MenuItem>
                        <MenuItem eventKey={7.5}>Link 5</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default PrimaryNav;