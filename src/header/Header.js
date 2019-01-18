import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <div className="dropdown">
      <button className="dropbtn">Locations</button>
      <div className="dropdown-content">
        <Link to="/locations">All PVD Locations</Link>
        <Link to="/add-location">Add a PVD Location</Link>
        <Link to="/delete-location">Delete a PVD Location</Link>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">Restrooms</button>
      <div className="dropdown-content">
        <Link to="/restrooms">All Restroom Posts</Link>
        <Link to="/add-post">Make a new Post</Link>
        <Link to="/update-post">Update a Post</Link>
        <Link to="/delete-post">Delete a Post</Link>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">Account Options</button>
      <div className="dropdown-content">
        <Link to="/change-password" className="dropbtn">Change Password</Link>
        <Link to="/sign-out" className="dropbtn">Sign Out</Link>
      </div>
    </div>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <div className="dropdown">
      <button className="dropbtn">Sign Up / Sign In</button>
      <div className="dropdown-content">
        <Link to="/sign-up" className="dropbtn">Sign Up</Link>
        <Link to="/sign-in" className="dropbtn">Sign In</Link>
      </div>
    </div>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <div className="dropdown">
      <button className="dropbtn">Home</button>
      <div className="dropdown-content">
        <Link to="/" className="dropbtn">Go to Homepage</Link>
      </div>
    </div>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>Providence Flush Kings</h1>
    <nav>
      {user && <span>Welcome, {user.email}</span>}
      {alwaysOptions}
      { user ? authenticatedOptions : unauthenticatedOptions }
    </nav>
  </header>
)

export default Header
