import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Signup from './components/Signup';
import Search from './containers/Search'
import NavBar from './components/NavBar'
import Login from './components/Login';
import MapContainer from './containers/MapContainer';

class App extends React.Component {

componentDidMount () {

}

  render() {
    return (
      <div className="App">
        <header className="urban-grind-app"></header>
        
        {/* <img src={"https://www.freepik.com/premium-photo/hot-coffee-with-smoke-heart-bokeh-background_3732171.htm"} className="App-logo" alt="logo" /> */}
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" render={(props) => <About {...props} />} />
            <Route path="/signup" render={(props) => <Signup {...props} />} />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route path="/discover" render={(props) => <MapContainer {...props} />} />
            <Route path="/search" render={(props) => <Search {...props} />} />

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
