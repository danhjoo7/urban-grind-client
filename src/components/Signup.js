import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/createUser'

class Signup extends React.Component {
    state = {
        name: "",
        username: "",
        password: "",
        residence: "",
        age: "",
        occupation: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createUser(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up For An Account</h1>

                <label>Name</label>
                <input
                    name='name'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={this.handleChange}
                /><br />

                <label>Username</label>
                <input
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleChange}
                /><br />

                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange}
                /><br />

                <label>City of Residence</label>
                <input
                    name='residence'
                    placeholder='Residence'
                    value={this.state.residence}
                    onChange={this.handleChange}
                /><br />

                <label>Occupation</label>
                <input
                    name='occupation'
                    placeholder='Occupation'
                    value={this.state.occupation}
                    onChange={this.handleChange}
                /><br />

                <label>Age</label>
                <input
                    name='age'
                    placeholder='Age'
                    value={this.state.age}
                    onChange={this.handleChange}
                /><br />

                <input type='submit' />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createUser: userInfo => dispatch(createUser(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);