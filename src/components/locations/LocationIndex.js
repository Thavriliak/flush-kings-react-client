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
      <div>
        {Locations}
      </div>
    )
  }
}

export default LocationIndex