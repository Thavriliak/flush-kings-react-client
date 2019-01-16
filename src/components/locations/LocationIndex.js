import React, { Component } from 'react'
import axios from 'axios'
import Location from './Location.js'
import { Link } from 'react-router-dom'

class LocationIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4741/locations')
      .then(res => {
        this.setState({ locations: res.data.locations })
      })
      .catch(console.error)
  }

  render() {

    const Locations = this.state.locations.map((data, index) => {
      return (
        <Location key={index} data={data} />
      )
    })

    return (
      <div className="addLocLink">
        <Link to="/add-post">Add a new post</Link>
        <Link to="/delete-post">Remove a post</Link>
        <div>
          {Locations}
        </div>
      </div>
    )
  }
}

export default LocationIndex