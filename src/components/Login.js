import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../actions/signIn'


class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signIn(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Username
                        <input
                            id="username"
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <button type="submit">
                        Log in
                    </button>
                </div>
            </form>

        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signIn: userInfo => { dispatch(signIn(userInfo)) }
    }
}

export default connect(null, mapDispatchToProps)(Login)
