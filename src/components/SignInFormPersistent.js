import { connect } from 'react-redux'
import React from 'react'
import 'isomorphic-fetch'

class SignInFormPersistent extends React.Component {

    async fetchData() {
        const res = await fetch('/user-identity');

        if(res.status == 200){
            const data = await res.json();
            this.props.dispatch({ type: 'USERNAME', username: data.profile.username });
        } else {
            this.props.dispatch({ type: 'USERNAME', username: 'Authentication Error'});
        }

    }

    componentDidMount() {
        if(this.props.username.length < 1){
            this.fetchData();
        }
    }

    render() {
        return (
            <div className="SignInFormPersistent">
                <div className="authuser">{ this.props.username }</div>

                <Nav pullLeft className="useractions">
                    <NavItem eventKey='{5}'>Sign Out</NavItem>
                </Nav>

                <Navbar.Form pullLeft className="form-ssosignon" hidden>
                    <FormGroup bsSize="small">
                        <FormControl type="text" placeholder="Username" />
                        <FormControl type="password" placeholder="Password" />
                    </FormGroup>
                    <Button type="submit" bsClass="btn-sm">Sign In</Button>
                </Navbar.Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { username: state.username };
}

export default connect(mapStateToProps)(SignInFormPersistent) //TypeError: this.selector is undefined
//export default SignInFormPersistent;