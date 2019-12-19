import React from 'react'
import { connect } from 'react-redux'


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
            <form onSubmit={(e) => { this.props.signIn(e, this.state, this.props.history) }}>
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
// const mapDispatchToProps = dispatch => {
//   return {
//     signIn: (e, login_info, history) => { dispatch(signIn(e, login_info, history)) }
//   }
// }

// export default connect(null, mapDispatchToProps)(Login)
export default Login