import React, { Component } from 'react'

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Submit form")
    }

    render() {
        return (
            <div>
                <h1>Sign In Page</h1>
                <br /><br />
                <form action="#" onSubmit={this.handleSubmit}>
                    Email:<br />
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    <br />
                    Password:<br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
