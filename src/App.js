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
import { getProfile} from './actions/getProfile'

class App extends React.Component {

  componentDidMount = () => {
    this.props.getProfile()
  }


  render() {
    return (
      <div className="App">
        <header className="urban-grind-app"></header>
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
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getProfile: () => dispatch(getProfile())
})

export default connect(null, mapDispatchToProps)(App);
