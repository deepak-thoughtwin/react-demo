import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addUser } from '../../actions'

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addingUser(this.state);

        // TODO: why not getting below things working
        console.log("Userdata: ", this.props.userData)
    }

    render() {
        return (
            <div>
                <h1>Sign Up Page</h1>
                <br /><br />
                <form action="#" onSubmit={this.handleSubmit}>
                    First name:<br />
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    <br />
                    Last name:<br />
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    <br />
                    Email:<br />
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    <br />
                    Password:<br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <br />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => ({
    addingUser: obj => dispatch(addUser(obj))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)