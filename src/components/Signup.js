import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/createUser'

class Signup extends React.Component {
    state = {
      username: "",
      password: "",
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
      this.props.userPostFetch(this.state)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up For An Account</h1>
  
          <label>Username</label>
          <input
            name='username'
            placeholder='Username'
            value={this.state.username}
            onChange={this.handleChange}
            /><br/>
  
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            /><br/>
  
          <label>Occupation</label>
            <input
              name='occupation'
              placeholder='occupation'
              value={this.state.occupation}
              onChange={this.handleChange}
              /><br/>
  
            <label>Age</label>
            <textarea
              name='age'
              placeholder='age'
              value={this.state.age}
              onChange={this.handleChange}
              /><br/>
  
          <input type='submit'/>
        </form>
      )
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    createUser: userInfo => dispatch(createUser(userInfo))
  })
  
  export default connect(null, mapDispatchToProps)(Signup);