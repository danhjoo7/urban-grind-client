import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Signup from './components/Signup';
import Map from './components/Map'
import NavBar from './components/NavBar'
import Login from './components/Login';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="urban-grind-app"></header>
        <NavBar />
        {/* <img src={"https://www.freepik.com/premium-photo/hot-coffee-with-smoke-heart-bokeh-background_3732171.htm"} className="App-logo" alt="logo" /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" render={(props) => <About {...props} />} />
            <Route path="/signup" render={(props) => <Signup {...props} />} />
            <Route path="/login" render={(props) => <Login {...props} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
