import React from 'react'
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button, Glyphicon} from 'react-bootstrap/lib'
import link from '../utils/bootstrapLink'
import ContrastToggle from './ContrastToggle'

class GlobalNavbar extends React.Component {
    render() {
        return (
            <Navbar className="GlobalNavbar" aria-label="Global Functions">

                {/* <Navbar.Text pullLeft className="authuser" hidden>Firstname Lastname</Navbar.Text>
                <Nav pullLeft className="useractions" hidden aria-label="User Actions">
                    <NavItem eventKey='{5}'>Sign Out</NavItem>
                </Nav>

                <Navbar.Form pullLeft className="form-ssosignon">
                    <FormGroup bsSize="small">
                        <FormControl type="text" placeholder="Username" aria-label="Sign in username" />
                        <FormControl type="password" placeholder="Password" aria-label="Sign in password" />
                    </FormGroup>
                    <Button type="submit" bsSize="small" bsStyle="primary">Sign In</Button>
                </Navbar.Form> */}

                <div className="page-actions">
                    {/* <Button type="button" bsSize="small"><Glyphicon glyph="print" title="Print this page" /><span className="hidden">Print</span></Button> */}
                    <ContrastToggle/>
                </div>

                {/* <Navbar.Form className="search" role="search" pullRight>
                    <FormGroup bsSize="small">
                        <FormControl type="text" placeholder="Site Search" aria-label="Site search input" />
                    </FormGroup>
                    <Button type="submit" bsSize="small" bsStyle="primary" title="Search this website for the word or phrase entered at left">Search</Button>
                </Navbar.Form>     */}

                <Nav pullRight className="nav-global" aria-label="Global Navigation">
                    <NavItem eventKey='{1}' href="/" onClick={(e) => link.handleLink(e, '/')}>Contact WOW</NavItem>
                    <NavItem eventKey='{2}' href="/">Dairy Dashboard</NavItem>
                    <NavItem eventKey='{3}' href="/">WOW &mdash; We Care Charity</NavItem>
                    <NavItem eventKey='{4}' href="/">Blog</NavItem>
                    <NavItem eventKey='{5}' href="/">Client Login</NavItem>
                    <NavItem eventKey='{6}' href="/">Careers</NavItem>
                    <NavItem eventKey='{7}' href="/">About WOW</NavItem>
                </Nav>

                <Navbar.Text pullRight className="phoneno hidden">Sales 888-888-8888</Navbar.Text>
                
            </Navbar>
        )
    }
}

export default GlobalNavbar;