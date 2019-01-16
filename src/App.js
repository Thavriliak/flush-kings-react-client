import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import LocationIndex from './components/locations/LocationIndex.js'
import LocationAdd from './components/locations/LocationAdd.js'
import RestroomIndex from './components/restrooms/RestroomIndex.js'
import Home from './components/Home.js'
import RestroomDelete from './components/restrooms/RestroomDelete.js'
import RestroomAdd from './components/restrooms/RestroomAdd.js'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}
        <div>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/sign-up' render={() => (
              <SignUp flash={this.flash} setUser={this.setUser} />
            )} />
            <Route path='/sign-in' render={() => (
              <SignIn flash={this.flash} setUser={this.setUser} />
            )} />
            <AuthenticatedRoute user={user} path='/sign-out' render={() => (
              <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
            )} />
            <AuthenticatedRoute user={user} path='/change-password' render={() => (
              <ChangePassword flash={this.flash} user={user} />
            )} />
            <Route path="/locations" component={LocationIndex} />
            <AuthenticatedRoute path="/add-location" component={LocationAdd} />
            <Route path="/restrooms" component={RestroomIndex} />
            <AuthenticatedRoute path="/delete-post" component={RestroomDelete} />
            <AuthenticatedRoute path="/add-post" component={RestroomAdd} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
