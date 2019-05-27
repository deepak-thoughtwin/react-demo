import React, { Component } from 'react'

export default class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        alert("Submit form")
    }

    render() {
        return (
            <div>
                <form action="#" onSubmit={this.handleSubmit}>
                    First name:<br />
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    <br />
                    Last name:<br />
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
