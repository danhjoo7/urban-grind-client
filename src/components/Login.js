import React from 'react'
import { connect } from 'react-redux'
import loginUser from '../actions/loginUser'

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
                            onChange={this.handleUsernameInputChange}
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
                            onChange={this.handlePasswordInputChange} />
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

// export default connect(null, mapDispatchToProps)(Login)
export default Login